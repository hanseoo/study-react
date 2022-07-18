import PropTypes from 'prop-types';
import { Component } from 'react';

// Props는 부모 컴포넌트에서 값을 설정해서 사용, 파라미터로 props를 받으면 사용 가능.
// children은 태그사이 값을 읽는다.
class MyComponent extends Component {
  //const { name, children } = props; //비구조화 할당 문법, 파라미터 부분에서 사용 가능.
  render({ name, favoriteNumber, children }) {
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다.
        <br />
        children 값은 {children}입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

// MyComponent.defaultProps - Props 기본값 설정
MyComponent.defaultProps = {
  name: '기본 이름',
};

// propTypes - Props의 타입을 지정할 때 사용
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
