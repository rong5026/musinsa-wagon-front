module.exports = {
  semi: false, // 세미콜론 사용 여부
  trailingComma: 'es5', // 배열이나 객체 리터럴에서 마지막 요소 뒤에 쉼표 사용 여부
  singleQuote: true, // 따옴표 사용 여부
  printWidth: 100, // 줄 바꿈 길이
  tabWidth: 2, // 탭 너비
  useTabs: false, // 탭 대신 공백 사용 여부
  endOfLine: 'auto', // 줄 바꿈 문자 설정
  bracketSpacing: true, // 객체 리터럴에서 중괄호 사이 공백 사용 여부
  arrowParens: 'always', // 화살표 함수 매개변수 괄호 사용 여부
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '^@core/(.*)$', // @core로 시작하는 import
    '^@server/(.*)$', // @server로 시작하는 import
    '^@ui/(.*)$', // @ui로 시작하는 import
    '^[./]', // 상대 경로 import
  ],
  importOrderSeparation: true, // import 그룹 사이에 빈 줄 추가
  importOrderSortSpecifiers: true, // import 내의 specifier 정렬
}
