import * as fs from 'fs';
const privateKey = fs.readFileSync('private.key', 'utf8');
const publicKey = fs.readFileSync('publice.key', 'utf8');

export const jwtConstants = {
  secret: '@JBGHKbdkv`~ffdf',
  privateKey: privateKey,
  publicKey: publicKey,
};
