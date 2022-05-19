// let으로 변수 선언하기
if (true) {
    var functionScopeValue = 'globla';
    let blockScopeValue = 'local';
}
console.log(functionScopeValue);    // global
console.log(blockScopeValue);   // ReferenceError