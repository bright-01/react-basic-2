import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState(data);
  const handleChangeName = () => {
      const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
      const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
      setPerson(prevState => ({...prevState, mentors: prevState.mentors.map(mentor =>{
              if(mentor.name === prev){
                  return {...mentor, name : current}
              }
              return mentor;
          }),
      }));
  }
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleChangeName}> 멘토의 이름을 바꾸기</button>

        <button
            onClick={() => {
                const name = prompt(`이름 추가요?`);
                const title = prompt(`타이틀 추가요?`);
                setPerson((prevState) => ({
                    ...prevState,
                    mentors: [...prevState.mentors, {name, title}]
                }) )
            }}
        >
            멘토 추가하기
        </button>

        <button
            onClick={() => {
                const prev = prompt(`삭제 이름ㅇ느요요?`);
                setPerson(prevState => ({
                    ...prevState,
                    mentors: prevState.mentors.filter((mentor) => mentor.name != prev)
                }))

            }}
        >
            멘토 삭제하기
        </button>
    </div>
  );
}

const data = {
    name: '엘리',
    title: '개발자',
    mentors: [
        {
            name: '밥',
            title: '시니어개발자',
        },
        {
            name: '제임스',
            title: '시니어개발자',
        },
    ],
}
