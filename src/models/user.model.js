import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
});
//, { versionKey: false }

// if (!userSchema.options.toObject) userSchema.options.toObject = {};
// userSchema.options.toObject.transform = function (doc, ret, options) {
//   delete ret.password;
//   delete Object.assign(ret, { ID: ret._id })._id;
//   return ret;
// }

// userSchema.post("find", function (result) {
//   if (Array.isArray(result)) {
//     result.forEach(item => {
//       delete item.password;
//       delete Object.assign(item, { ID: item._id })._id;
//     });
//   }
//   return result;
// })

export default mongoose.model("user", userSchema);