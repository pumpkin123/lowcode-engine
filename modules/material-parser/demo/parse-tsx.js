/*
 * @Description: 
 * @Version: 2.0
 * @Author: qnkong01
 * @Date: 2022-07-27 13:15:41
 * @LastEditors: qnkong01
 * @LastEditTime: 2022-07-27 15:15:33
 */
const parse = require('../lib').default;
const fs = require('fs');

(async () => {
  const options = {
    entry: '../../../bpm-mobile/src/index.tsx',
    accesser: 'local',
  };

  const actual = await parse(options);
  console.log(JSON.stringify(actual, null, 2));
  fs.writeFile('./demo/transfer.json', JSON.stringify(actual), err => {
    if (err) {
      console.error(err)
      return
    }
    //文件写入成功。
  })
  
})();
