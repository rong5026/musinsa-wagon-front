/**
 * Component Summary: 페이지 제목을 표시하는 컴포넌트
 * Props: name - 제목 텍스트
 * Usage: 페이지 상단에 제목을 표시할 때 사용
 */
import Link from 'next/link'

interface TitleProps {
  name?: string
}

export function Title({ name }: TitleProps) {
  return (
    <div className="bg-white flex text-center font-bold text-lg justify-center">
      <Link href="/">{name || 'MUSINSAWAGON'}</Link>
    </div>
  )
}
