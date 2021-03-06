// 第二种捕获错误的方法：Promise会自动捕获内部异常，并交给rejected响应函数处理-reject响应捕获

console.log('here we go')
new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('bye')
    }, 2000)
  })
  .then(value => {
    console.log(value + ' world')
  }, value => {
    console.log('Error：', value)
  })