(this["webpackJsonpbook-list"]=this["webpackJsonpbook-list"]||[]).push([[0],{24:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a(0),c=a.n(n),o=a(4),r=a.n(o),s=(a(24),a(2)),i=a(3),d=a(11),C=a.n(d),b=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{className:"header__title",children:"My Reading List"}),Object(l.jsx)("button",{title:"Change the theme",className:"header__btn nav-btn",onClick:e.handleClick,children:Object(l.jsx)(i.Icon,{icon:C.a,className:"header__img"})})]})})},u=a(6),m=a(17),h=a(29),j=a(12),f=a.n(j),O=function(e){var t=c.a.useRef(null);return Object(l.jsx)(h.a,{nodeRef:t,in:!(e.isInputOverlay||e.isUpdateOverlay),classNames:"scale",timeout:300,children:Object(l.jsx)("button",{ref:t,title:"Add a new book",className:"add-new__btn add-btn",onClick:e.handleOverlay,children:Object(l.jsx)(i.Icon,{icon:f.a,className:"add-new__btn--img"})})})},p=a(30),k=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),o=a[0],r=a[1],i=Object(n.useState)(""),d=Object(s.a)(i,2),C=d[0],b=d[1],u=c.a.useRef(null),m=function(){""!==o&&""!==C&&(r(""),b(""))};return Object(l.jsx)(h.a,{nodeRef:u,in:e.isOverlay,classNames:"slide-left",unmountOnExit:!0,timeout:300,children:Object(l.jsx)("section",{ref:u,className:"overlay",children:Object(l.jsx)("div",{className:"overlay__form",children:Object(l.jsxs)("form",{className:"form",children:[Object(l.jsxs)("div",{className:"form__group",children:[Object(l.jsx)("label",{className:"form__label",htmlFor:"form-title",children:"Book Title"}),Object(l.jsx)("input",{type:"text",className:"form__input",id:"form-title",value:o,onChange:function(e){r(e.target.value)},placeholder:"Enter book title here\u2026"})]}),Object(l.jsxs)("div",{className:"form__group",children:[Object(l.jsx)("label",{className:"form__label",htmlFor:"form-author",children:"Book Author"}),Object(l.jsx)("input",{type:"text",className:"form__input",id:"form-author",value:C,onChange:function(e){b(e.target.value)},placeholder:"Enter book author here\u2026"})]}),Object(l.jsxs)("div",{className:"form__btns",children:[Object(l.jsx)("button",{onClick:function(t){t.preventDefault(),""!==o&&""!==C&&(e.handleBookSubmit({id:Object(p.a)(),title:o,author:C,status:!1}),m(),e.handleOverlay())},className:"overlay-btn",children:"Add Book"}),Object(l.jsx)("button",{onClick:function(t){t.preventDefault(),m(),e.handleOverlay()},className:"overlay-btn",children:"Cancel"})]})]})})})})},_=a(13),V=a.n(_),v=a(14),x=a.n(v),N=a(15),y=a.n(N),g=a(16),E=a.n(g),H=function(e){return e.status?Object(l.jsx)("button",{title:"Mark as unread",className:"book-card__btn--unmark card-btn",onClick:function(){return e.handleReadStatus(e.bookId)},children:Object(l.jsx)(i.Icon,{icon:E.a,className:"book-card__img--unmark"})}):Object(l.jsx)("button",{title:"Mark as read",className:"book-card__btn--mark card-btn",onClick:function(){return e.handleReadStatus(e.bookId)},children:Object(l.jsx)(i.Icon,{icon:y.a,className:"book-card__img--mark"})})},M=function(e){var t=Object(n.useState)("unread"),a=Object(s.a)(t,2),c=a[0],o=a[1];Object(n.useEffect)((function(){e.book.status?o("read"):o("unread")}),[c,e.book.status]);return Object(l.jsxs)("div",{className:"book-card ".concat(c),children:[Object(l.jsx)("p",{className:"book-card__title",children:e.book.title}),Object(l.jsxs)("span",{className:"book-card__btns",children:[Object(l.jsx)("button",{title:"Update book",className:"book-card__btn--update card-btn",onClick:function(t){t.preventDefault(),e.handleBook(e.book),e.handleOverlay()},children:Object(l.jsx)(i.Icon,{icon:V.a,className:"book-card__img--update"})}),Object(l.jsx)(H,{bookId:e.book.id,handleReadStatus:e.handleReadStatus,status:e.book.status}),Object(l.jsx)("button",{title:"Delete book",className:"book-card__btn--delete card-btn",onClick:function(){return e.handleDelete(e.book.id)},children:Object(l.jsx)(i.Icon,{icon:x.a,className:"book-card__img--delete"})})]}),Object(l.jsxs)("p",{className:"book-card__author",children:["by ",e.book.author]})]})},Z=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),o=a[0],r=a[1],i=Object(n.useState)(""),d=Object(s.a)(i,2),C=d[0],b=d[1],u=c.a.useRef(null);c.a.useEffect((function(){r(e.book.title),b(e.book.author)}),[e.book]);return Object(l.jsx)(h.a,{nodeRef:u,in:e.isOverlay,classNames:"slide-left",unmountOnExit:!0,timeout:300,children:Object(l.jsx)("section",{ref:u,className:"update-overlay",children:Object(l.jsx)("div",{className:"update-overlay__form",children:Object(l.jsxs)("form",{className:"update-form",children:[Object(l.jsxs)("div",{className:"update-form__group",children:[Object(l.jsx)("label",{className:"update-form__label",htmlFor:"update-form-title",children:"New Book Title"}),Object(l.jsx)("input",{type:"text",className:"update-form__input",id:"update-form-title",value:o||"",onChange:function(e){r(e.target.value)},placeholder:"Enter book title here\u2026"})]}),Object(l.jsxs)("div",{className:"update-form__group",children:[Object(l.jsx)("label",{className:"update-form__label",htmlFor:"update-form-author",children:"New Book Author"}),Object(l.jsx)("input",{type:"text",className:"update-form__input",id:"update-form-author",value:C||"",onChange:function(e){b(e.target.value)},placeholder:"Enter book author here\u2026"})]}),Object(l.jsxs)("div",{className:"update-form__btns",children:[Object(l.jsx)("button",{onClick:function(t){t.preventDefault(),""!==o&&""!==C&&(e.handleBookUpdate(e.book.id,o,C),e.handleOverlay())},className:"overlay-btn",children:"Update Book"}),Object(l.jsx)("button",{onClick:function(t){t.preventDefault(),e.handleBook({}),e.handleOverlay()},className:"overlay-btn",children:"Cancel"})]})]})})})})},L=function(e){var t=c.a.useState({}),a=Object(s.a)(t,2),n=a[0],o=a[1],r=function(e){o(e)};return Object(l.jsxs)("section",{className:"book-card-container",children:[e.books.map((function(t,a){return Object(l.jsx)(M,{book:t,handleBook:r,handleOverlay:e.handleOverlay,handleReadStatus:e.handleReadStatus,handleDelete:e.handleDelete},t.id)})),Object(l.jsx)(Z,{book:n,isOverlay:e.isOverlay,handleBook:r,handleOverlay:e.handleOverlay,handleBookUpdate:e.handleBookUpdate})]})};function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},c=Object.keys(e);for(l=0;l<c.length;l++)a=c[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)a=c[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var B=n.createElement("g",{id:"bookshelf"},n.createElement("g",{id:"bottom-pot",className:"pot"},n.createElement("path",{id:"Vector",d:"M158.513 254.154C157.194 251.135 157.05 247.765 158.105 244.652C159.16 241.54 161.346 238.891 164.267 237.184C165.24 236.619 164.351 235.155 163.373 235.722C160.022 237.634 157.521 240.652 156.344 244.206C155.166 247.76 155.394 251.603 156.984 255.008C157.431 256.006 158.957 255.145 158.513 254.154H158.513Z",fill:"black"}),n.createElement("path",{id:"Vector_2",d:"M159.02 256.43C156.631 252.386 157.193 247.547 158.052 243.175C158.95 238.61 160.126 233.975 159.108 229.333C158.647 227.079 157.554 224.987 155.947 223.278C155.173 222.476 153.923 223.675 154.694 224.475C157.699 227.593 158.048 232.115 157.56 236.132C156.985 240.869 155.356 245.485 155.558 250.299C155.611 252.741 156.274 255.136 157.49 257.284C157.613 257.469 157.807 257.602 158.03 257.654C158.253 257.706 158.489 257.673 158.687 257.563C158.886 257.452 159.031 257.272 159.093 257.06C159.156 256.849 159.129 256.623 159.02 256.43L159.02 256.43Z",fill:"black"}),n.createElement("path",{id:"Vector_3",className:"pot__base",d:"M171.844 269.342H141.727C141.022 269.341 140.347 269.073 139.849 268.598C139.351 268.122 139.07 267.477 139.07 266.804V258.354C139.072 256.182 139.976 254.1 141.584 252.565C143.191 251.03 145.371 250.166 147.644 250.164H152.061C152.296 250.163 152.521 250.074 152.687 249.916C152.853 249.757 152.947 249.542 152.947 249.317V245.369C152.947 244.995 153.103 244.637 153.38 244.372C153.657 244.108 154.032 243.959 154.423 243.959H159.148C159.539 243.959 159.914 244.108 160.191 244.372C160.468 244.637 160.623 244.995 160.624 245.369V249.317C160.624 249.542 160.718 249.757 160.884 249.916C161.05 250.074 161.275 250.163 161.51 250.164H165.927C168.2 250.166 170.38 251.03 171.987 252.565C173.594 254.1 174.499 256.182 174.501 258.354V266.804C174.5 267.477 174.22 268.122 173.722 268.598C173.224 269.073 172.548 269.341 171.844 269.342V269.342Z",fill:"none"}),n.createElement("path",{id:"Vector_4",className:"pot__petals",d:"M157.248 218.598C157.882 221.813 157.097 224.652 155.495 224.941C153.892 225.229 152.079 222.857 151.445 219.643C150.811 216.428 152.761 211.083 152.761 211.083C152.761 211.083 156.614 215.384 157.248 218.598Z",fill:"none"}),n.createElement("path",{id:"Vector_5",className:"pot__petals",d:"M169.409 233.553C167.401 236.203 164.703 237.61 163.382 236.697C162.061 235.783 162.618 232.895 164.626 230.245C166.634 227.596 172.039 225.274 172.039 225.274C172.039 225.274 171.417 230.903 169.409 233.553Z",fill:"none"})),n.createElement("g",{id:"top-pot",className:"pot"},n.createElement("path",{id:"Vector_6",d:"M103.004 51.0896C101.685 48.0705 101.54 44.7005 102.595 41.5883C103.65 38.4761 105.836 35.827 108.757 34.1196C109.73 33.5546 108.841 32.0906 107.863 32.6584C104.512 34.5695 102.011 37.5879 100.834 41.142C99.6566 44.696 99.8842 48.5392 101.474 51.9437C101.921 52.9419 103.447 52.0808 103.004 51.0896H103.004Z",fill:"black"}),n.createElement("path",{id:"Vector_7",d:"M103.51 53.3655C101.121 49.322 101.683 44.4832 102.543 40.1106C103.44 35.546 104.616 30.9114 103.598 26.2689C103.137 24.015 102.045 21.9226 100.437 20.2144C99.6634 19.4115 98.4131 20.6105 99.1846 21.411C102.19 24.5286 102.538 29.0511 102.051 33.0676C101.476 37.805 99.8465 42.4214 100.049 47.2353C100.102 49.6771 100.764 52.0716 101.981 54.2196C102.103 54.4053 102.297 54.5381 102.52 54.5902C102.743 54.6422 102.979 54.6094 103.178 54.4986C103.376 54.3878 103.522 54.2077 103.584 53.9963C103.646 53.7849 103.62 53.5588 103.51 53.3655L103.51 53.3655Z",fill:"black"}),n.createElement("path",{id:"Vector_8",className:"pot__base",d:"M116.334 66.2778H86.2173C85.5127 66.2771 84.8373 66.0094 84.3391 65.5336C83.8409 65.0577 83.5607 64.4125 83.5599 63.7395V55.2896C83.5625 53.1182 84.4667 51.0365 86.0741 49.5011C87.6815 47.9657 89.8609 47.102 92.1341 47.0996H96.5515C96.7863 47.0993 97.0115 47.0101 97.1776 46.8515C97.3436 46.6929 97.437 46.4778 97.4373 46.2535V42.305C97.4377 41.9311 97.5934 41.5727 97.8702 41.3083C98.147 41.044 98.5222 40.8953 98.9136 40.8948H103.638C104.029 40.8953 104.404 41.044 104.681 41.3083C104.958 41.5727 105.114 41.9311 105.114 42.305V46.2535C105.114 46.4778 105.208 46.6929 105.374 46.8515C105.54 47.0101 105.765 47.0993 106 47.0996H110.417C112.691 47.102 114.87 47.9657 116.477 49.5011C118.085 51.0365 118.989 53.1182 118.992 55.2896V63.7395C118.991 64.4125 118.711 65.0577 118.212 65.5336C117.714 66.0094 117.039 66.2771 116.334 66.2778V66.2778Z",fill:"none"}),n.createElement("path",{id:"Vector_9",className:"pot__petals",d:"M101.738 15.5342C102.373 18.7486 101.588 21.5883 99.985 21.8767C98.3825 22.1651 96.5694 19.7931 95.9353 16.5786C95.3012 13.3642 97.2514 8.01886 97.2514 8.01886C97.2514 8.01886 101.104 12.3197 101.738 15.5342Z",fill:"none"}),n.createElement("path",{id:"Vector_10",className:"pot__petals",d:"M113.9 30.4889C111.892 33.1386 109.193 34.5461 107.872 33.6327C106.551 32.7194 107.108 29.831 109.116 27.1813C111.124 24.5317 116.529 22.2099 116.529 22.2099C116.529 22.2099 115.908 27.8393 113.9 30.4889Z",fill:"none"})),n.createElement("path",{id:"shelf",d:"M190.741 334.492H10.039C7.3774 334.489 4.82568 333.478 2.94365 331.68C1.06162 329.882 0.00298379 327.445 0 324.902V9.58914C0.00298379 7.04681 1.06162 4.60944 2.94365 2.81174C4.82568 1.01405 7.3774 0.00285008 10.039 0H190.741C193.402 0.002862 195.954 1.01406 197.836 2.81175C199.718 4.60944 200.777 7.04682 200.78 9.58914V324.902C200.777 327.445 199.718 329.882 197.836 331.68C195.954 333.478 193.402 334.489 190.741 334.492V334.492ZM10.039 1.12813C7.69053 1.13067 5.43903 2.02291 3.77843 3.6091C2.11782 5.1953 1.18371 7.34592 1.18106 9.58914V324.902C1.18371 327.146 2.11782 329.296 3.77843 330.882C5.43903 332.469 7.69053 333.361 10.039 333.363H190.741C193.089 333.361 195.341 332.469 197.001 330.882C198.662 329.296 199.596 327.146 199.599 324.902V9.58914C199.596 7.34592 198.662 5.1953 197.001 3.6091C195.341 2.02291 193.089 1.13067 190.741 1.12813H10.039Z",fill:"black"}),n.createElement("path",{id:"fourth-shelf",d:"M200.189 65.123H0.590515V66.2512H200.189V65.123Z",fill:"black"}),n.createElement("path",{id:"third-shelf",d:"M200.189 132.829H0.590515V133.957H200.189V132.829Z",fill:"black"}),n.createElement("path",{id:"second-shelf",d:"M200.189 200.535H0.590515V201.663H200.189V200.535Z",fill:"black"}),n.createElement("path",{id:"first-shelf",d:"M200.189 268.24H0.590515V269.369H200.189V268.24Z",fill:"black"}),n.createElement("g",{id:"left-book",className:"book"},n.createElement("path",{id:"Vector_11",d:"M43.1085 153.426H18.8969V161.887H43.1085V153.426Z",fill:"#D72323"}),n.createElement("path",{id:"Vector_12",d:"M43.1085 181.065H18.8969V189.526H43.1085V181.065Z",fill:"#D72323"}),n.createElement("path",{id:"Vector_13",d:"M41.337 201.936H21.259C20.4762 201.935 19.7257 201.638 19.1722 201.109C18.6187 200.58 18.3073 199.863 18.3064 199.116V144.401C18.3073 143.653 18.6187 142.936 19.1722 142.408C19.7257 141.879 20.4762 141.582 21.259 141.581H41.337C42.1198 141.582 42.8703 141.879 43.4239 142.408C43.9774 142.936 44.2888 143.653 44.2897 144.401V199.116C44.2888 199.863 43.9774 200.58 43.4239 201.109C42.8703 201.638 42.1198 201.935 41.337 201.936V201.936ZM21.259 142.709C20.7893 142.709 20.339 142.888 20.0069 143.205C19.6748 143.522 19.488 143.952 19.4875 144.401V199.116C19.488 199.564 19.6748 199.994 20.0069 200.312C20.339 200.629 20.7893 200.807 21.259 200.808H41.337C41.8067 200.807 42.257 200.629 42.5891 200.312C42.9213 199.994 43.1081 199.564 43.1086 199.116V144.401C43.1081 143.952 42.9213 143.522 42.5891 143.205C42.257 142.888 41.8067 142.709 41.337 142.709H21.259Z",fill:"black"})),n.createElement("g",{id:"second-center-book",className:"book"},n.createElement("path",{id:"Vector_14",d:"M80.3119 153.426H56.1002V161.887H80.3119V153.426Z",fill:"none"}),n.createElement("path",{id:"Vector_15",d:"M80.3119 181.065H56.1002V189.526H80.3119V181.065Z",fill:"none"}),n.createElement("path",{id:"Vector_16",d:"M78.5403 201.936H58.4623C57.6795 201.935 56.929 201.638 56.3755 201.109C55.8219 200.58 55.5106 199.863 55.5096 199.116V144.401C55.5106 143.653 55.8219 142.936 56.3755 142.408C56.929 141.879 57.6795 141.582 58.4623 141.581H78.5403C79.3231 141.582 80.0736 141.879 80.6271 142.408C81.1806 142.936 81.492 143.653 81.4929 144.401V199.116C81.492 199.863 81.1806 200.58 80.6271 201.109C80.0736 201.638 79.3231 201.935 78.5403 201.936V201.936ZM58.4623 142.709C57.9926 142.709 57.5423 142.888 57.2102 143.205C56.878 143.522 56.6912 143.952 56.6907 144.401V199.116C56.6912 199.564 56.878 199.994 57.2102 200.312C57.5423 200.629 57.9926 200.807 58.4623 200.808H78.5403C79.01 200.807 79.4603 200.629 79.7924 200.312C80.1245 199.994 80.3113 199.564 80.3119 199.116V144.401C80.3113 143.952 80.1245 143.522 79.7924 143.205C79.4603 142.888 79.01 142.709 78.5403 142.709H58.4623Z",fill:"black"})),n.createElement("g",{id:"first-center-book",className:"book"},n.createElement("path",{id:"Vector_17",d:"M139.365 85.1741H115.153V93.6351H139.365V85.1741Z",fill:"none"}),n.createElement("path",{id:"Vector_18",d:"M139.365 112.813H115.153V121.274H139.365V112.813Z",fill:"none"}),n.createElement("path",{id:"Vector_19",d:"M137.593 133.684H117.515C116.732 133.683 115.982 133.385 115.428 132.857C114.875 132.328 114.564 131.611 114.563 130.863V76.1489C114.564 75.4012 114.875 74.6844 115.428 74.1556C115.982 73.6269 116.732 73.3295 117.515 73.3286H137.593C138.376 73.3295 139.127 73.6269 139.68 74.1556C140.234 74.6844 140.545 75.4012 140.546 76.1489V130.863C140.545 131.611 140.234 132.328 139.68 132.857C139.127 133.385 138.376 133.683 137.593 133.684V133.684ZM117.515 74.4567C117.046 74.4572 116.595 74.6357 116.263 74.9529C115.931 75.2702 115.744 75.7003 115.744 76.1489V130.863C115.744 131.312 115.931 131.742 116.263 132.059C116.595 132.377 117.046 132.555 117.515 132.556H137.593C138.063 132.555 138.513 132.377 138.845 132.059C139.178 131.742 139.364 131.312 139.365 130.863V76.1489C139.364 75.7003 139.178 75.2702 138.845 74.9529C138.513 74.6357 138.063 74.4572 137.593 74.4567H117.515Z",fill:"black"})),n.createElement("g",{id:"right-book",className:"book"},n.createElement("path",{id:"Vector_20",d:"M176.568 85.1741H152.356V93.6351H176.568V85.1741Z",fill:"none"}),n.createElement("path",{id:"Vector_21",d:"M176.568 112.813H152.356V121.274H176.568V112.813Z",fill:"none"}),n.createElement("path",{id:"Vector_22",d:"M174.796 133.684H154.719C153.936 133.683 153.185 133.385 152.632 132.857C152.078 132.328 151.767 131.611 151.766 130.863V76.1489C151.767 75.4012 152.078 74.6844 152.632 74.1556C153.185 73.6269 153.936 73.3295 154.719 73.3286H174.796C175.579 73.3295 176.33 73.6269 176.883 74.1556C177.437 74.6844 177.748 75.4012 177.749 76.1489V130.863C177.748 131.611 177.437 132.328 176.883 132.857C176.33 133.385 175.579 133.683 174.796 133.684V133.684ZM154.719 74.4567C154.249 74.4572 153.799 74.6357 153.466 74.9529C153.134 75.2702 152.947 75.7003 152.947 76.1489V130.863C152.947 131.312 153.134 131.742 153.466 132.059C153.799 132.377 154.249 132.555 154.719 132.556H174.796C175.266 132.555 175.716 132.377 176.049 132.059C176.381 131.742 176.568 131.312 176.568 130.863V76.1489C176.568 75.7003 176.381 75.2702 176.049 74.9529C175.716 74.6357 175.266 74.4572 174.796 74.4567H154.719Z",fill:"black"})),n.createElement("g",{id:"right-tilted-book",className:"book"},n.createElement("path",{id:"Vector_23",d:"M110.009 148.373L87.3451 156.508L90.4609 164.428L113.125 156.293L110.009 148.373Z",fill:"none"}),n.createElement("path",{id:"Vector_24",d:"M120.188 174.246L97.5234 182.381L100.639 190.301L123.304 182.166L120.188 174.246Z",fill:"none"}),n.createElement("path",{id:"Vector_25",d:"M106.38 201.306C105.78 201.305 105.194 201.129 104.7 200.802C104.207 200.475 103.829 200.013 103.618 199.476L83.4688 148.258C83.1943 147.558 83.2218 146.782 83.5453 146.101C83.8687 145.421 84.4616 144.89 85.194 144.626L103.989 137.88C104.352 137.75 104.738 137.689 105.126 137.701C105.513 137.714 105.895 137.799 106.248 137.952C106.601 138.105 106.919 138.323 107.184 138.593C107.449 138.864 107.655 139.182 107.792 139.528L127.94 190.746C128.215 191.446 128.187 192.222 127.864 192.903C127.541 193.584 126.948 194.114 126.215 194.378H126.215L107.42 201.124C107.088 201.244 106.735 201.305 106.38 201.306V201.306ZM105.029 138.827C104.815 138.827 104.604 138.864 104.404 138.936L85.6096 145.682C85.1701 145.84 84.8143 146.159 84.6202 146.567C84.4262 146.976 84.4097 147.441 84.5743 147.861L104.723 199.079C104.805 199.287 104.929 199.478 105.088 199.64C105.247 199.802 105.438 199.933 105.65 200.025C105.862 200.117 106.09 200.168 106.323 200.175C106.555 200.183 106.787 200.146 107.005 200.068L125.8 193.322C126.239 193.164 126.595 192.845 126.789 192.437C126.983 192.028 127 191.563 126.835 191.143L106.686 139.925C106.559 139.603 106.332 139.325 106.036 139.129C105.74 138.933 105.389 138.828 105.029 138.827V138.827Z",fill:"black"})),n.createElement("g",{id:"left-tilted-book",className:"book"},n.createElement("path",{id:"Vector_26",d:"M28.5165 81.2492L5.85217 89.3842L8.96799 97.3044L31.6324 89.1695L28.5165 81.2492Z",fill:"none"}),n.createElement("path",{id:"Vector_27",d:"M38.6948 107.122L16.0305 115.257L19.1463 123.177L41.8106 115.042L38.6948 107.122Z",fill:"none"}),n.createElement("path",{id:"Vector_28",d:"M24.8872 134.182C24.2868 134.181 23.7009 134.005 23.2074 133.678C22.714 133.351 22.3364 132.889 22.1248 132.352L1.97584 81.1342C1.70141 80.434 1.72893 79.6584 2.05235 78.9775C2.37577 78.2966 2.96869 77.766 3.70108 77.5022L22.4961 70.7562C22.859 70.6259 23.2453 70.5651 23.6329 70.5774C24.0204 70.5897 24.4017 70.6748 24.7548 70.8279C25.1079 70.9809 25.426 71.1989 25.6909 71.4694C25.9558 71.7399 26.1623 72.0576 26.2986 72.4044L46.4476 123.622C46.722 124.322 46.6945 125.098 46.3711 125.779C46.0477 126.46 45.4547 126.99 44.7224 127.254H44.7223L25.9274 134C25.5949 134.12 25.2426 134.182 24.8872 134.182ZM23.5357 71.7031C23.3225 71.7034 23.111 71.7403 22.9115 71.8122L4.11665 78.5582C3.67718 78.7165 3.32139 79.0349 3.12732 79.4434C2.93325 79.852 2.91674 80.3174 3.08143 80.7376L23.2304 131.955C23.3122 132.163 23.4362 132.354 23.5951 132.516C23.754 132.678 23.9449 132.809 24.1568 132.901C24.3686 132.993 24.5974 133.044 24.8299 133.051C25.0624 133.059 25.2942 133.022 25.5119 132.944L44.3068 126.198C44.7463 126.04 45.1021 125.721 45.2961 125.313C45.4902 124.904 45.5067 124.439 45.342 124.019L25.193 72.801C25.0661 72.479 24.8395 72.2015 24.5435 72.0054C24.2474 71.8093 23.8959 71.7039 23.5357 71.7031V71.7031Z",fill:"black"})));function w(e,t){var a=e.title,l=e.titleId,c=I(e,["title","titleId"]);return n.createElement("svg",S({width:201,height:335,viewBox:"0 0 201 335",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},c),a?n.createElement("title",{id:l},a):null,B)}var R=n.forwardRef(w),D=(a.p,function(e){var t=Object(n.useState)((function(){var e=localStorage.getItem("books");return null!==e?JSON.parse(e):[]})),a=Object(s.a)(t,2),c=a[0],o=a[1];Object(n.useEffect)((function(){localStorage.setItem("books",JSON.stringify(c))}),[c]);var r=Object(n.useState)(!1),i=Object(s.a)(r,2),d=i[0],C=i[1],b=Object(n.useState)(!1),h=Object(s.a)(b,2),j=h[0],f=h[1],p=function(e){o((function(t){return[].concat(Object(m.a)(t),[e])}))},_=function(){C((function(e){return!e}))};return 0===c.length?Object(l.jsxs)("article",{className:"reading-list-empty",children:[Object(l.jsxs)("p",{className:"reading-list-empty__title",children:["Your reading list is empty!",Object(l.jsx)("br",{}),"Add a book to populate it\u2026"]}),Object(l.jsx)(R,{className:"reading-list-empty__img"}),Object(l.jsx)(O,{isInputOverlay:d,isUpdateOverlay:j,handleOverlay:_}),Object(l.jsx)(k,{isOverlay:d,handleBookSubmit:p,handleOverlay:_})]}):Object(l.jsxs)("article",{className:"reading-list",children:[Object(l.jsx)(L,{books:c,isOverlay:j,handleBookUpdate:function(e,t,a){o((function(l){return l.map((function(l){return l.id===e?Object(u.a)(Object(u.a)({},l),{},{title:t,author:a}):l}))}))},handleReadStatus:function(e){o((function(t){return t.map((function(t){return t.id===e?Object(u.a)(Object(u.a)({},t),{},{status:!t.status}):t}))}))},handleOverlay:function(){f((function(e){return!e}))},handleDelete:function(e){return o(c.filter((function(t){return e!==t.id})))}}),Object(l.jsx)(k,{isOverlay:d,handleBookSubmit:p,handleOverlay:_}),Object(l.jsx)(O,{isInputOverlay:d,isUpdateOverlay:j,handleOverlay:_})]})}),U=function(){var e=Object(n.useState)((function(){var e=localStorage.getItem("theme");return null!==e?e:"dark"})),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){localStorage.setItem("theme",a)}),[a]),Object(l.jsxs)("main",{className:"app ".concat(a),children:[Object(l.jsx)(b,{theme:a,handleClick:function(){c("dark"===a?"light":"dark")}}),Object(l.jsx)(D,{})]})};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(U,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.cb252a62.chunk.js.map