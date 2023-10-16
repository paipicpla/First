function work2(str) {

    let tmp_TEST_STRING = str;

    console.log('TEST_STRING: ', tmp_TEST_STRING)
}

work2('입력한 스티링');

function work2_1(str) {
    
    let tmp = str ? str : '입력한 스트링이 없습니다.';

    console.log('TEST_STRING_2: ', tmp)
}