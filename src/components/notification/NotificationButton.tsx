import { Bell, X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

import { Button } from '../button'

// 알림 데이터 타입
interface NotificationItem {
  id: number
  title: string
  message: string
  time: string
  isRead: boolean
  type: 'price' | 'product' | 'system'
}

// 더미 알림 데이터
const mockNotifications: NotificationItem[] = [
  {
    id: 1,
    title: '가격 변동 알림',
    message: '나이키 에어맥스 가격이 15% 할인되었습니다.',
    time: '2분 전',
    isRead: false,
    type: 'price',
  },
  {
    id: 2,
    title: '신상품 알림',
    message: '관심 브랜드 아디다스에서 새로운 상품이 출시되었습니다.',
    time: '1시간 전',
    isRead: false,
    type: 'product',
  },
  {
    id: 3,
    title: '시스템 공지',
    message: '시스템 점검이 오늘 밤 12시에 예정되어 있습니다.',
    time: '3시간 전',
    isRead: true,
    type: 'system',
  },
  {
    id: 4,
    title: '가격 변동 알림',
    message: '삼성 갤럭시 워치 가격이 20% 할인되었습니다.',
    time: '1일 전',
    isRead: true,
    type: 'price',
  },
]

// 알림 드롭다운 컴포넌트
const NotificationDropdown = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'price':
        return 'text-blue-600 bg-blue-50'
      case 'product':
        return 'text-green-600 bg-green-50'
      case 'system':
        return 'text-orange-600 bg-orange-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'price':
        return '가격'
      case 'product':
        return '상품'
      case 'system':
        return '시스템'
      default:
        return '기타'
    }
  }

  return (
    <div
      ref={dropdownRef}
      className="fixed right-4 top-16 w-96 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-w-[calc(100vw-2rem)] sm:max-w-96"
    >
      {/* 헤더 */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">알림</h3>
        <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
          <X className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      {/* 알림 목록 */}
      <div className="max-h-96 overflow-y-auto">
        {mockNotifications.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <Bell className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p>새로운 알림이 없습니다.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {mockNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                  !notification.isRead ? 'bg-blue-50/30' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(
                          notification.type
                        )}`}
                      >
                        {getTypeLabel(notification.type)}
                      </span>
                      {!notification.isRead && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      )}
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">{notification.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 푸터 */}
      {mockNotifications.length > 0 && (
        <div className="p-3 border-t border-gray-100">
          <button className="w-full text-sm text-blue-600 hover:text-blue-800 font-medium">
            모든 알림 보기
          </button>
        </div>
      )}
    </div>
  )
}

// 메인 알림 버튼 컴포넌트
const NotificationButton = ({ notificationCount = 4 }: { notificationCount?: number }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        onClick={handleToggle}
        variant="ghost"
        size="small"
        className={`!text-gray-600 hover:!text-gray-900 hover:!bg-gray-50 !px-3 !py-2.5 relative ${
          isOpen ? '!bg-gray-100' : ''
        }`}
      >
        <div className="relative">
          <Bell className="w-5 h-5" />
          {notificationCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-semibold">
              {notificationCount > 99 ? '99+' : notificationCount}
            </span>
          )}
        </div>
        <span className="hidden md:block text-sm font-medium">알림</span>
      </Button>

      <NotificationDropdown isOpen={isOpen} onClose={handleClose} />
    </div>
  )
}

export default NotificationButton
