'use client'  // 클라이언트 컴포넌트임을 명시
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div>
      Hello world!
      <br />
      <button onClick={() => {console.log('click'); router.push('/section1')}}> section </button>
    </div>
  );
}
