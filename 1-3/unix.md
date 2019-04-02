# 유닉스 명령어 모음

## Basic
- man
매뉴얼 페이지 출력. 기본 편집기로 출력됨. 
```bash
$> man [command]
```
- printf, echo
표준 출력.
```bash
$> echo hello   //hello
```
-  ; && || !
    - ; : acommand; bcommand; : 두개 이상의 명령을 동시에 실행. 앞의 명령에 오류가 있어도 **반드시** 뒤의 명령이 실행된다.
    - && : acommand && bcommand : 두개 이상의 명령을 실행하되, 앞의 명령이 정상 실행되었을 때에만 뒤의 명령이 실행됨.
    - || : acommand || bcommand : 두개 이상의 명령을 실행하되, 앞의 명령이 실패해도 뒤의 명령이 실행됨.
    - !  : 명령 히스토리 스택. !-1은 가장 최근 명령을 불러옴.


## Direcotry
- pwd : Present Working Directory
현재 디렉토리 경로를 표준 출력.
- ls : list
현재 디렉토리의 하위 항목들을 표준 출력.
- cd : change [directory]
directory 로 working directory change.
- less, more, cat
모두 파일 읽기. less는 파일을 넘어갈 경우 편집기로 실행. more는 지나간 내용을 볼 수 없지만 less는 가능. cat은 결과를 표준출력함.
- file
파일 타입을 표준 출력.
- mkdir : make directory [directory]
directory를 생성.
- mv : move [direction from] [direction to]
from에서 to로 파일을 이동. 파일명을 바꿀때도 쓰인다.
- cp : copy [target from] [target to]
from에서 to로 대상을 복사. -r(ecursive)와 자주 쓰임.
- rm : remove [target]
target을 삭제. -r(ecursive), -f(forced)와 자주 쓰임.


## IO Redirection, Pipe
> 파일 디스크럽터  
> 0 : 표준 입력. 키보드 입력  
> 1 : 표준 출력. 모니터 출력  
> 2 : 표준 에러. 모니터 출력  
### >
리눅스에서 리다이렉션은 표준 출력을 파일로 리다이렉션하는 것을 말한다.  
```bash
$> ls -al > dir.txt
```

### >>
append의 의미.
```bash
$> ls -al / >> dir.txt
```

### <
표준 입력 대신 파일로부터 표준 입력을 받는다.
```bash
$> sort < dir.txt
```

### |
버티컬 바를 기준으로 앞의 명령의 결과를 뒤의 명령의 입력으로 전달한다.
```bash
$> ls -al | grep sh
```


## Permission

퍼미션 정보 : [1 234 567 89A]  
1 파일 타입을 표시: "d"는 디렉토리를, "-"는 파일, "c"는 캐릭터 디바이스, "s"는 소켓, "b"는 블록 디바이스, "l"는 심볼릭 링크.

234 유저 권한 : read, write, execute 순으로 표시. -는 권한 없음을 의미.

567 그룹 권한 : 그룹의 권한. 유저와 포맷 동일

89A everybody : 나머지의 권한. 포맷 동일

- chmode : change mode
"rwx"는 3비트로 표현. 2^3으로.   
"rwx"는 2^2 + 2^1 + 2^0 = 7.
"r-x"는 2^2 + 2^0 = 5.
"r--"는 2^2 = 4.

```bash
$> chmode dir.txt 777 // permision을 모두 오픈.
```

- chown : change owner [user]
소유자를 user로 변경.
- chgrp : change group [group]
소유그룹을 group으로 변경

## Job Control
- jobs : 백그라운드 작업들을 보여줌.
- ps : process -[eufp]
현재 프로세스 상태를 보여준다.
e : entire
u : filter user
f : full format
p : filter process number

## Administrator
- which : which [command]
검색가능한 곳(bin)에서 실행바이너리의 경로를 찾음. 
- whereis : whereis [command]
실행바이너리 경로를 찾음.
- printenv : print environment variables
환경 변수를 출력.
- cron : 작업 스케쥴러.
