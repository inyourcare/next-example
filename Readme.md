# NextJS 예제용 Repository 입니다.

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
```
yarn add -D ts-node typescript @types/node
npx prisma db seed
```