import { Inject, Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import * as bcrypt from 'bcrypt';
import * as nodeMailer from 'nodemailer';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly usersRepository: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.findAll<User>();
  }

  async CreateUser(user: any): Promise<any> {
    const data: any = await this.findByEmail(user.email);
    if (data) {
      return 'eamil id already exists';
    } else {
      const euser = await this.encrptPass(user);
      await this.usersRepository.create<User>(euser);
      await this.sendMail(euser);
      return 'User Creat Successfully....Please Check You Gmail';
    }
  }

  async findByEmail(email: string): Promise<User[]> {
    const data: any = await this.usersRepository.findOne<User>({
      where: { email: email },
    });
    return data;
  }

  async encrptPass(user: any): Promise<any> {
    const saltOrRounds = 10;
    const password = user.password;
    const hash = await bcrypt.hash(password, saltOrRounds);
    const uverfication_token = Math.floor(100000 + Math.random() * 900000);
    const euser = {
      name: user.name,
      email: user.email,
      gender: user.gender,
      password: hash,
      verfication_token: uverfication_token,
    };
    return euser;
  }

  async decyptPass(rpass: string, dpass: string): Promise<any> {
    const data = bcrypt.compare(rpass, dpass);
    return data;
  }

  async sendMail(user: any): Promise<any> {
    const { email, name, verfication_token } = user;
    console.log({ email, name, verfication_token });
    const transporter = nodeMailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'viralgtcsys@gmail.com',
        pass: 'ViralG@123',
      },
    });

    const mailOptions = {
      from: 'viralgtcsys@gmail.com',
      to: email,
      subject: 'create account ',
      html: `<div class="center" style="border-radius:5px;margin:0 auto;background-color:#e8e8e8;padding: 20px;width: 450px;text-align: center;">
      <img src="https://thumbs2.imgbox.com/cf/4e/pkQ2sLuL_t.jpg" style="border-radius: 50%" alt="image host"/>
      <form><h1 align="center">just one more step...</h1>
        <p align="center"><b align="center">${name}</b></p>
        <p align="center">Click the button below to active your shopping card account</p>
        <a href="http://localhost:3000/user/verify/query?email=${email}&Token=${verfication_token}"><button style="background-color:#0096FF;margin-left:auto;margin-right:auto;display:block;margin-top:auto;margin-bottom:0%">Active Account</button>
        </form></div>`,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.log(error);
      }
    });
  }

  async verify(record): Promise<any> {
    const { email, Token } = record;
    const user = await this.usersRepository.findOne<User>({
      where: { email: email },
    });
    const dtoken = user.verfication_token;
    if (user) {
      if (dtoken == Token) {
        await this.usersRepository.update<User>(
          { activeToken: true, verfication_token: 0 },
          {
            where: { email: email },
          },
        );
        return 'your account is active now';
      }
    }
  }
  //
  async deleteUser(record): Promise<any> {
    const { email } = record;
    const data = await this.findByEmail(email);
    if (data) {
      await this.usersRepository.destroy<User>({
        where: { email: email },
      });
      return 'user deleted successfully';
    } else {
      return 'user not exist';
    }
  }

  async singin(user): Promise<any> {
    const { password, email } = user;
    const data = await this.usersRepository.findOne<User>({
      where: { email: email },
    });
    if (data) {
      const dpass = data.password;
      if (!data.activeToken == true) {
        return 'Please Active Your Account First';
      }
      const passmatch = await this.decyptPass(password, dpass);
      if (passmatch) {
        return 'login successfull';
      } else {
        return 'Auth Failed';
      }
    } else {
      const message: object = {
        Error: 'Auth Failed',
      };
      return message;
    }
  }
}
