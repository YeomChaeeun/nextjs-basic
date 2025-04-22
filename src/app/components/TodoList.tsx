// src/app/components/TodoList.tsx
'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// 데이터를 가져오는 함수
const fetchTodos = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return data;
};

export default function TodoList() {
  // useQuery 훅 사용
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러 발생: {error.message}</div>;

  return (
    <div>
      <h1>할 일 목록</h1>
      <ul>
        {data.map(todo => (
          <li key={todo.id}>
            {todo.completed ? '✅' : '❌'} {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
