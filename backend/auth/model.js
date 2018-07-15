import { Users, ResetTokens } from '../db/models';

export const createUser = user =>
  Users.create({
    ...user,
  });

export const getUserByEmail = service =>
  Users.findAll({
    where: service,
  }).then(users => users[0]);

export const createResetToken = (email, name, token) => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return ResetTokens.find({ where: { email } })
    .then(user => {
      if (!user) return null;
      return user.destroy();
    })
    .then(() => ResetTokens.create({ email, name, token }));
};

export const deleteToken = token =>
  ResetTokens.find({ where: { token } }).then(res => res.destroy());
//   knex('reset-token')
//     .where('token', token)
//     .del();

// export const getTokenObject = token =>
//   knex('reset-token')
//     .where('token', token)
//     .then(model => model[0]);

export const changePassword = (email, password) => Users.update({ password }, { where: { email } });
