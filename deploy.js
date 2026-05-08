const COS = require('cos-nodejs-sdk-v5');
const fs = require('fs');
const path = require('path');

const cos = new COS({
  SecretId: process.env.TENCENT_SECRET_ID,
  SecretKey: process.env.TENCENT_SECRET_KEY
});

const uploadDir = (dir, prefix = '') => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      uploadDir(filePath, prefix + file + '/');
    } else {
      cos.putObject({
        Bucket: 'jiadi-fullstack-app-1302373024',
        Region: 'ap-shanghai',
        Key: prefix + file,
        Body: fs.createReadStream(filePath)
      }, (err, data) => {
        if (err) {
          console.error('上传失败:', err);
        } else {
          console.log('上传成功:', prefix + file);
        }
      });
    }
  });
};

console.log('开始部署...');
uploadDir('./client/dist');
console.log('部署完成！');
