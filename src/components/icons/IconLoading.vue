<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <rect width="24" height="24" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlink:href="#image0_620_33577" transform="scale(0.0166667)" />
      </pattern>
      <image
        id="image0_620_33577"
        width="60"
        height="60"
        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAPKADAAQAAAABAAAAPAAAAACL3+lcAAAG4UlEQVRoBe2a22sdRRjAZ2YvJ6eXtGmLmKZWimKpUoS+KOiDgg8+CkLUx+pDQEm0pTbUGjpF25I2ttpapU998KGaF/8CUQRBQcRSSOmDiKUxgjG1sZecs5fx+/Zkcnb3nJ3d2d2zFNqBZOf2XX5nvp3bOZRUmCYnT29Z8rzjRJDnArOUfNdnGPvHx8euVeUGrcoQwt5x3Ytgb0PM5kLdNJ+sCprFjPesGIxsJyza27Dc1jPbYcWVAa+Ecdi6zMsQl+UePisDFkQMJnGo2pJk8tZXBpzXwbLl7jlgM+snyI9++hj1m9upYV7zGzsvcf68m1W2F/2EEPTw4cNWf3+/sXr1andkZMTJYid1WeL85AZikymYdF5cUUjJZULMUf7e2MxKXUqGHzkpVF34wb2pvkj5c+fOWXNziwOE+KEBs5YI2fMv59SX/bo900M6DotaBNlBhPs1P3JqVzelvazjfNqen7+9KQqLFp0+Qk6tT7OtBMYwjoxsVNtaIL9QJTTCWtbsRsdpJkSD04ejH3UzWlIC4zsb7d5Rqgw6Hbbl261bt0Jh3uEvUQPDBNUp0lHTc+issOjZ4uKi1+FhqEIJjLMxCSaokET3bM+gdWAJYe6hQ4eUs7USuLX0mKPA+F93zkht6dA6sJZli8HB/uuUUuVqoARGnNbSQ1+DbKXQurCOM/RPlrU4FTiAPrjnF0KKQVNC51BXtxRvywPL+XCzm+54XSZgFOI5oD/86OxDKwbhsL+Sj2dCbZxzU730tIUxjHFks8KiZGZg7KwL7S41jqIcJrzZgMdCUIj+W1huC2pt216XvM62BfPAorQWMApoQVPyLOffBusi3mjgzQZMKhcwhIM/yIdvO3B/3GwaNbSjSnlhUWfCjkVlrtXW2mGJC1CC2Tkx+cQZeJTz3bDPTU+tA8HxxHMzaigCi/LaI4xCmDKNNCVwqsoGizpxSbHteuI6WhQWbeQGRuEUaJ/4ZAL76aRm88Eb3fqXAYt6CwGjAoQ2+2ovQPYbeEEa8PTheREOHS/x9/f+jH10UmvG3TYfHmnb9hqOc+NvndlYx2buvjhBcX4ejmnlJHyn8a8cbfeoluDT41NTm2iD7YYw3Ak3iHCTkD3B8nIdQviSqPnn+b5989kls/fEnRepzW6xTLrGc13leTeu1TBNx3HFTdIYuoavBEVY0mBniBBr4p21ypTeJDV/tGzoYJu5avZxz/MMLX9inQ3D8JzbQzOsNbIFYVE5fGCBrpihwkUY2aKw6EOgA3QxDOPCTkkFZepa1olhLNUXfaKuwstSUSeqlmc44ZRmtExdy04FE05JDqIuhrMr7OluFtYJOgJdhRXFFMDsihNOrFa7GOgAXffcsqT9Sd0XCH0C09PTRtpFeKh7ahb1wQ1IqRNrKftU3Lwwh73q+2QHnPAMQehVw3O/mpjY/1sqVZcO+H0Ws80nXN9dD/OLLyidNzbWL/GRkdtdumtVFQb+4MSZbb7rvC18Ug9bBnDBPO+ELjTCwldkz4R1BXlK3Tqr/XjgwJvXO9o0KgqFC8J6jvNOHBbtwyGHeob5ioYvQVcc2a4yQph3/MbTx459prXXj+vKDSxhYaeWeBykRGzVeafxnQ3COO6lLJcArfziSdqJP2UYq2BRBkbZGxgYWPm+lvOza6jlPiV/04EXecIxf+L8rWAfMDMzI4i1zgfB5IFoQ+cK72TFccrlsoTtFsZxEcbI5eHh4WDTEMDajZcF8R+Bj2IV/mGeQh22oSzMyMEEFdfTUW5Da4e3FrAM4yywlJE7vuV/KZ0NRlbQjitYiIIatsl+OBvDzJz+c4qc0JmB5cimhXHgOCVLzLQ+CZ+NZRhLsPAz3IZLD87GvYLOBCxhs46sYVkfT7w7+nsYqhXG0Zp2CUO8nXDp6RV0KjCH30h2W2fb7rVzGMY4sp2w7T5Zc3mg+enT/Wn6lcC4TDDPfT3ryJYFK53WhSY3vF1pW1El8JUrf2z1BRmSDiQ9yxzZuA0daJ+KtbXaA+viOsJlJbAw7fhPfcOyQb6XsNKYDnSDeZEtrtQhn0pgny0lfomNCqqAlY5mha6TVcpfKiiB+fj4n/AF16/SaPhZJay0mwZtGuyv8fE38gOjIdG0v4hDM0pmBTOnypiNJUzWJ0KztcYPTNAIGML6jc0X0/Sk7qWX97mf88nJzczvG6Ruc2H79oevyi1jmoFetPOxsUWYjb+vwwSF7yyGcdrISj9SgWVHDG/I499dkXDfDY7g2VjrfKx8h+8KspKduA9c8gcaUkcV91GqtpCKErKVjTAe9pP8VbUlyeStrwwYbzbgYg9/EhFJWIdtkcoeFgrfWur4lnbFo6Mrb9//AW1mYlWe/rfCAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
</template>
