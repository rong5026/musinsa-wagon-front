import React from 'react'

import { ResponsiveContainer } from './ResponsiveContainer'

interface MainLayoutProps {
  children: React.ReactNode
  showCategoryBar?: boolean
  className?: string
}

/**
 * 메인 레이아웃 컴포넌트
 * - Header/Footer: 전체 너비
 * - 본문: 반응형 여백 (PC: 여백 있음, 태블릿/모바일: 여백 없음)
 */
const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  showCategoryBar = true,
  className = '',
}) => {
  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      {/* Header - 전체 너비 */}
      <ResponsiveContainer fullWidth>
        <div>sdfsdf</div>
      </ResponsiveContainer>

      {/* Main Content - 반응형 여백 */}
      <main>
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </main>

      {/* Footer - 전체 너비 */}
      <ResponsiveContainer fullWidth>
        <footer className="bg-gray-900 text-white py-12 mt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* 회사 정보 */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold mb-4">MUSINSA WAGON</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  무신사 웨건은 최신 패션 트렌드와 다양한 브랜드를 제공하는
                  <br />
                  이커머스 플랫폼입니다.
                </p>
                <div className="mt-4 text-sm text-gray-400">
                  <p>고객센터: 1588-1234</p>
                  <p>평일 09:00 - 18:00 (점심시간 12:00 - 13:00)</p>
                </div>
              </div>

              {/* 고객지원 */}
              <div>
                <h4 className="font-semibold mb-4">고객지원</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      공지사항
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      자주묻는질문
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      1:1문의
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      배송조회
                    </a>
                  </li>
                </ul>
              </div>

              {/* 정책 */}
              <div>
                <h4 className="font-semibold mb-4">약관/정책</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      이용약관
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      개인정보처리방침
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      환불정책
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      배송정책
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* 하단 정보 */}
            <div className="border-t border-gray-800 mt-8 pt-8 text-xs text-gray-500">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p>© 2024 MUSINSA WAGON. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </ResponsiveContainer>
    </div>
  )
}

export default MainLayout
