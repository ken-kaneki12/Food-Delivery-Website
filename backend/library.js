const express=require('express');
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const Joi=require('@hapi/joi');
const dotenv=require('dotenv')
const router=require('express').Router();

module.exports={express,mongoose,bcrypt,jwt,Joi,dotenv,router};