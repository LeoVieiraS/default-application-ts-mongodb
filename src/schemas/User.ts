import {Schema, model, Document } from 'mongoose'


interface IUser extends Document{ 
  email: string
  firstName?: String
  lastName?: String
  fullName(): string
}

const UserSchema = new Schema({
  email: {type: String, required: true},
  firstName: String,
  lastName: String
}, {
  timestamps: true
})

UserSchema.methods.fullName = function () {
  return this.firstName + ' ' + this.lastName
}

export default model<IUser>('User', UserSchema)