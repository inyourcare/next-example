# NextJS 예제용 Repository 입니다.
## 예제 활용
이 레포지토리에 my-blogify 예제를 사용하려면 아래 명령어를 사용하세요
```
yarn create next-app -e https://github.com/inyourcare/next-example/tree/main/my-blogify
```
## Prisma
### 설치
```
yarn add prisma @prisma/client --save-dev
npx prisma init --datasource-provider sqlite
npx prisma migrate dev --name init
```
### 변경이 있을 때 마다 migrate
```
npx prisma migrate dev --name table_post_create
```
### schema 로 부터 Object 필요하다면
```
npx prisma generate
```
### 데이터를 직접 보고 싶다면
```
npx prisma studio
```
### seed
package.json 에 다음 내용 추가
```
{
  ...
  "prisma": {
    "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
  },
  ...
}
```
```
yarn add -D ts-node typescript @types/node
npx prisma db seed
```


## Markdown
```
yarn add markdown-to-jsx gray-matter
```