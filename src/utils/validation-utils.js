// import moment from 'moment';

export function nameVerification(name) {
  const trimmedName = name.trim();
  return trimmedName.length > 3 && trimmedName.length <= 12;
}

export function dobVerification(dob) {
  // const currentDateMomemt = moment();
  // const dobMoment = moment(dob, "YYYY-MM-DD");
  return true;
}

export function emailVerification(email) {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(email.toLowerCase());
}

export function phoneVerification(phone) {
  const reg = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
  return reg.test(phone)
}
