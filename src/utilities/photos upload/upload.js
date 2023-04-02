import multer from "multer";
import { v4 as uuidv4 } from "uuid";
export const uploadFile = (fieldName) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, `${uuidv4()}_${file.originalname}`);
    },
  });

  const upload = multer({ storage });
  return upload.single(fieldName);
};
