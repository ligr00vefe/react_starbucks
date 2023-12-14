import React from 'react'
import { Link } from 'react-router-dom'

import '../../css/signin.css'

const SignInPage = () => {
  return (
    <section className="signin">
      <h1>로그인</h1>
      <div className='signin__card'>
        <h2><strong>Welcome!</strong> 스타벅스에 오신 것을 환영합니다.</h2>
        <form action="">
          <input type="text" placeholder='아이디를 입력해주세요.' />
          <input type="password" placeholder='비밀번호를 입력해주세요.' />
          <input type="submit" value='로그인' />
          <p>
            * 비밀번호를 타 사이트와 같이 사용할 경우 도용 위험이 있으니, <br />
            정기적으로 비밀번호를 변경하세요!
          </p>
        </form>
        <div className='actions'>
          <Link to={'/'} >회원가입</Link>
          <Link to={'/'} >아이디 찾기</Link>
          <Link to={'/'} >비밀번호 찾기</Link>
        </div>
      </div>
    </section>
  )
}

export default SignInPage