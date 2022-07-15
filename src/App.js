import './App.css';

function App() {
  const name = '리액트';
  const name2 = undefined;
  const style = {
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성.
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  };

  return (
    <>
      <h1>Hello {name}!</h1>
      <h2>잘 작동하니?</h2>

      {/* if 문 대신 삼항 연산자를 사용 */}
      {name === '리액트' ? (
        <h1>if문 대신 삼항연산자를 사용합니다.</h1>
      ) : (
        <h2>리액트 입니다.</h2>
      )}

      {/* AND 연산자(&&)를 사용한 조건부 렌더링 - 특정 조건을 만족할 때 내용 표시 */}
      {name === '리액트' && (
        <h1>조건부 렌더링 특정 조건을 만족시키면 출력합니다.</h1>
      )}

      {/* undefiend를 렌더링하지 않고 다른내용 보여주기 */}
      {name2 || 'Defiend'}

      {/* css 적용 */}
      <div style={style}>{name}</div>

      {/* css 적용 className 적용 */}
      <div className="react">{name}</div>

      {/* 꼭 닫아야 하는 태그 br, input */}
      <br />
      <input />

      {/* 포멧 F1 - Format Document(forced) */}
      <h1>1</h1>
      <h2>2</h2>
      <h3>3</h3>
      <h2>4</h2>
    </>
  );
}

export default App;
