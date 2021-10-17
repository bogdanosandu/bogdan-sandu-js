var globarVariable = 'Ma aflu in cointextul global';

function contextTest() {
  var localVariable = 'Nu ma aflu in contextul local';

  console.log(globarVariable);
  console.log(localVariable);
}
contextTest();
