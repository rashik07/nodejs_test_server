const PassportInfo = require("../modules/PassportInfo");

exports.dataPostService = async ( downloadURL,name,passport) => {
  // console.log(image);
  const PassportInfoItem = new PassportInfo({

    downloadURL,name,passport
  });
  const passportInfo = await PassportInfoItem.save();
  console.log(passportInfo);
  return passportInfo;
};
exports.getPassportInfo = async ( _id) => {

  const getpassportInfo = await PassportInfo.find({ _id });
  return getpassportInfo;
};
exports.getAllPassportInfo = async ( ) => {

  const getpassportInfo = await PassportInfo.find({});
  return getpassportInfo;
};
exports.deleteAllPassportInfo = async ( _id) => {

  const deletedItem = await PassportInfo.findByIdAndRemove({ _id });
  return deletedItem;
};

