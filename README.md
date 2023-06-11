## nextjs 기본

1. data fetcing

- getServerSideProps :동적 서버동작 (서버부하)
- getStaticProps : 정적 서버동작(서버부하x) - ex.블로그
  (with getStaticPaths =>page path까지 외부에 의존적인 경우 사용)
  (with ISR - 증분정적사이트 재생성: 특정주기로 정적 사이터 다시 그려줌)
- getClientSideProps: 클라이언트

* build > start 확인가능 (빌드 타임으로 설정) - getStaticProps때문

2. pre-render seo, routing
   pages 가 src보다 우선순위
   jsconfig.json에 root 경로 설정
   slug 파일 (다양한 위계의 dynamic 제공 )
   ex. user/[username].js user/[user]/username.js

   <img width="1746" alt="스크린샷 2023-06-11 오후 1 47 44" src="https://github.com/fangmin266/gitlevelup/assets/123913446/87606a14-0c42-4a04-b898-6f34d3e6f49e"/>

## 그외

prettier로 자동설정가능
