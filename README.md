<h1 align="center"> Youtube Clone Coading</h1><br>

>리액트를 사용하여 유튜브 클론 사이트를 제작했습니다.<br>
>유튜브API를 사용하여 제작되었습니다.<br><br>
>스크롤을 내릴때마다 데이터를 계속해서 받아오기 위해 고민을 많이 했었는데,
>React-Intersection-Observer를 사용하여 요소의 하단을 감지하게 만들었습니다.<br>
>이후, Load되고 있는 상태임을 확인하기 위해 UseState를 사용했으며,
>요소의 하단과 Load가 Ture일 경우에만 유튜브 API의 nextPageToken을 받아와서 페이지를 보여지게 만들었습니다.
>총 300개의 영상이 존재하였고, 데이터를 받아오다 nextPageToken이 undefined라면 받아오지 않도록 제작하였습니다.<br>
