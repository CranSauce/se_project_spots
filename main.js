!function(){"use strict";var e="";const t={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__submit-btn",inactiveButtonClass:"modal__submit-btn_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error"},o=(e,t,o)=>{(e=>e.some((e=>!e.validity.valid)))(e)?n(t,o):r(t,o)},n=(e,t)=>{e.disabled=!0,e.classList.add(t.inactiveButtonClass)},r=(e,t)=>{e.disabled=!1,e.classList.remove(t.inactiveButtonClass)},c=(e,o,n)=>{e.querySelector(`#${o.id}-error`).textContent=n,o.classList.add(t.inputErrorClass)},a=(e,o)=>{e.querySelector(`#${o.id}-error`).textContent="",o.classList.remove(t.inputErrorClass)},s=e=>{Array.from(document.querySelectorAll(e.formSelector)).forEach((n=>{((e,n)=>{const r=Array.from(e.querySelectorAll(t.inputSelector)),s=e.querySelector(t.submitButtonSelector);o(r,s,n),r.forEach((t=>{t.addEventListener("input",(function(){((e,t)=>{t.validity.valid?a(e,t):c(e,t,t.validationMessage),console.log(t.validity)})(e,t),o(r,s,n)}))}))})(n,e)}))};s(t);var l=e+"315f49fc459de1bfa785.svg",i=e+"2fc47fd8e9a9bcd9612f.jpg",d=e+"d38272e02bb4f1ab1c37.svg",u=e+"40608da7369d39bc1077.svg";document.getElementById("header-logo").src=l,document.getElementById("profile-avatar").src=i,document.getElementById("profile-edit-icon").src=d,document.getElementById("profile-post-icon").src=u;const m=[{name:"Val Thorens",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"},{name:"Restaurant terrace",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"},{name:"An outdoor cafe",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"},{name:"A very long bridge, over the forest and through the trees",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"},{name:"Tunnel with morning light",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"},{name:"Mountain house",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"},{name:"Golden Gate bridge",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg"}];document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".profile__name"),o=document.querySelector(".profile__description"),n=document.querySelector(".profile__edit-btn"),r=document.querySelector("#edit-profile"),c=r.querySelector("#edit-profile-close-btn"),s=r.querySelector("#profile-name-input"),l=r.querySelector("#profile-description-input"),i=document.forms["profile-form"],d=document.querySelector(".profile__post-btn"),u=document.querySelector("#add-card-modal"),p=u.querySelector("#new-post-close-btn"),f=document.forms["new-post"],_=u.querySelector("#add-card-link-input"),v=u.querySelector("#add-card-caption-input"),y=u.querySelector(".modal__submit-btn"),g=document.querySelector("#preview-modal"),b=g.querySelector(".modal__image"),S=g.querySelector(".modal__caption"),E=g.querySelector(".modal__close-btn_type_preview"),h=document.querySelector("#card-template").content,k=document.querySelector(".cards__list");function q(e){const t=h.cloneNode(!0).querySelector(".card"),o=t.querySelector(".card__image"),n=t.querySelector(".card__title"),r=t.querySelector(".card__like-btn"),c=t.querySelector(".card__delete-btn");return r.addEventListener("click",(()=>{r.classList.toggle("card__like-btn_liked")})),o.addEventListener("click",(()=>{w(g),b.src=e.link,b.alt=e.name,S.textContent=e.name})),c.addEventListener("click",(()=>{t.remove()})),o.src=e.link,o.alt=e.name,n.textContent=e.name,t}function w(e){e.classList.add("modal_opened");const t=t=>{t.target===e&&L(e)};e.addEventListener("click",t);const o=t=>{"Escape"===t.key&&L(e)};document.addEventListener("keydown",o),e._closeModalOnClickOutside=t,e._closeModalOnEsc=o}function L(e){e.classList.remove("modal_opened"),e.removeEventListener("click",e._closeModalOnClickOutside),document.removeEventListener("keydown",e._closeModalOnEsc),delete e._closeModalOnClickOutside,delete e._closeModalOnEsc}m.forEach((e=>{const t=q(e);k.appendChild(t)})),n.addEventListener("click",(()=>{var t;t=i,[s,l].forEach((e=>{a(t,e),e.value=""})),w(r),s.value=e.textContent,l.value=o.textContent})),d.addEventListener("click",(()=>{w(u)})),E.addEventListener("click",(()=>{L(g)})),c.addEventListener("click",(()=>{L(r)})),p.addEventListener("click",(()=>{L(u)})),i.addEventListener("submit",(function(t){t.preventDefault(),e.textContent=s.value,o.textContent=l.value,L(r)})),f.addEventListener("submit",(function(e){e.preventDefault();const o=q({name:v.value,link:_.value});k.prepend(o),f.reset(),disableButton(y,t),L(u)}))})),s(t)}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoieUJBQ0EsSUFBSUEsRUNEb0IsR0NBakIsTUFBTUMsRUFBVyxDQUN0QkMsYUFBYyxlQUNkQyxjQUFlLGdCQUNmQyxxQkFBc0IscUJBQ3RCQyxvQkFBcUIsNkJBQ3JCQyxnQkFBaUIsMEJBQ2pCQyxXQUFZLGdCQXNCUkMsRUFBb0JBLENBQUNDLEVBQVdDLEVBQVVDLEtBTnZCRixJQUNqQkEsRUFBVUcsTUFBTUMsSUFDZEEsRUFBTUMsU0FBU0MsUUFLcEJDLENBQWdCUCxHQUNwQlEsRUFBY1AsRUFBVUMsR0FFeEJPLEVBQWFSLEVBQVVDLEVBQ3ZCLEVBR0tNLEVBQWdCQSxDQUFDUCxFQUFVVCxLQUMvQlMsRUFBU1MsVUFBVyxFQUNwQlQsRUFBU1UsVUFBVUMsSUFBSXBCLEVBQVNJLG9CQUFvQixFQUdoRGEsRUFBZUEsQ0FBQ1IsRUFBVVQsS0FDOUJTLEVBQVNTLFVBQVcsRUFDcEJULEVBQVNVLFVBQVVFLE9BQU9yQixFQUFTSSxvQkFBb0IsRUFtQm5Ea0IsRUFBaUJBLENBQUNDLEVBQVFDLEVBQVNDLEtBQ3BCRixFQUFPRyxjQUFjLElBQUlGLEVBQVFHLFlBQ3pDQyxZQUFjSCxFQUN6QkQsRUFBUUwsVUFBVUMsSUFBSXBCLEVBQVNLLGdCQUFnQixFQUczQ3dCLEVBQWlCQSxDQUFDTixFQUFRQyxLQUNYRCxFQUFPRyxjQUFjLElBQUlGLEVBQVFHLFlBQ3pDQyxZQUFjLEdBQ3pCSixFQUFRTCxVQUFVRSxPQUFPckIsRUFBU0ssZ0JBQWdCLEVBR3ZDeUIsRUFBb0JwQixJQUNicUIsTUFBTUMsS0FBS0MsU0FBU0MsaUJBQWlCeEIsRUFBT1QsZUFDcERrQyxTQUFTWixJQW5FS2EsRUFBQ2IsRUFBUWIsS0FDaEMsTUFBTUYsRUFBWXVCLE1BQU1DLEtBQUtULEVBQU9XLGlCQUFpQmxDLEVBQVNFLGdCQUN4RE8sRUFBV2MsRUFBT0csY0FBYzFCLEVBQVNHLHNCQUMvQ0ksRUFBa0JDLEVBQVdDLEVBQVVDLEdBRXZDRixFQUFVMkIsU0FBU0UsSUFDakJBLEVBQWFDLGlCQUFpQixTQUFTLFdBc0NqQkMsRUFBQ2hCLEVBQVFDLEtBQzdCQSxFQUFRWCxTQUFTQyxNQUdwQmUsRUFBZU4sRUFBUUMsR0FGdkJGLEVBQWVDLEVBQVFDLEVBQVNBLEVBQVFnQixtQkFJMUNDLFFBQVFDLElBQUlsQixFQUFRWCxTQUFTLEVBM0N6QjBCLENBQW1CaEIsRUFBUWMsR0FDM0I5QixFQUFrQkMsRUFBV0MsRUFBVUMsRUFDeEMsR0FBRSxHQUNGLEVBMEREMEIsQ0FBa0JiLEVBQVFiLEVBQU8sR0FDaEMsRUFHTG9CLEVBQWlCOUIsRyxnSUMxRWpCaUMsU0FBU1UsZUFBZSxlQUFlQyxJQUFNQyxFQUM3Q1osU0FBU1UsZUFBZSxrQkFBa0JDLElBQU1FLEVBQ2hEYixTQUFTVSxlQUFlLHFCQUFxQkMsSUFBTUcsRUFDbkRkLFNBQVNVLGVBQWUscUJBQXFCQyxJQUFNSSxFQUVuRCxNQUFNQyxFQUFlLENBQ25CLENBQUVDLEtBQU0sY0FBZUMsS0FBTSwySEFDN0IsQ0FBRUQsS0FBTSxxQkFBc0JDLEtBQU0sbUhBQ3BDLENBQUVELEtBQU0sa0JBQW1CQyxLQUFNLHlIQUNqQyxDQUFFRCxLQUFNLDREQUE2REMsS0FBTSwySEFDM0UsQ0FBRUQsS0FBTSw0QkFBNkJDLEtBQU0sMEhBQzNDLENBQUVELEtBQU0saUJBQWtCQyxLQUFNLDJIQUNoQyxDQUFFRCxLQUFNLHFCQUFzQkMsS0FBTSwrSEFHdENsQixTQUFTSyxpQkFBaUIsb0JBQW9CLFdBRzVDLE1BQU1jLEVBQWNuQixTQUFTUCxjQUFjLGtCQUNyQzJCLEVBQXFCcEIsU0FBU1AsY0FBYyx5QkFDNUM0QixFQUFhckIsU0FBU1AsY0FBYyxzQkFDcEM2QixFQUFtQnRCLFNBQVNQLGNBQWMsaUJBQzFDOEIsRUFBeUJELEVBQWlCN0IsY0FBYywyQkFDeEQrQixFQUFxQkYsRUFBaUI3QixjQUFjLHVCQUNwRGdDLEVBQTRCSCxFQUFpQjdCLGNBQWMsOEJBQzNEaUMsRUFBa0IxQixTQUFTMkIsTUFBTSxnQkFHakNDLEVBQWdCNUIsU0FBU1AsY0FBYyxzQkFDdkNvQyxFQUFlN0IsU0FBU1AsY0FBYyxtQkFDdENxQyxFQUFxQkQsRUFBYXBDLGNBQWMsdUJBQ2hEc0MsRUFBYy9CLFNBQVMyQixNQUFNLFlBQzdCSyxFQUFtQkgsRUFBYXBDLGNBQWMsd0JBQzlDd0MsRUFBc0JKLEVBQWFwQyxjQUFjLDJCQUNqRHlDLEVBQWdCTCxFQUFhcEMsY0FBYyxzQkFHM0MwQyxFQUFlbkMsU0FBU1AsY0FBYyxrQkFDdEMyQyxFQUFvQkQsRUFBYTFDLGNBQWMsaUJBQy9DNEMsRUFBc0JGLEVBQWExQyxjQUFjLG1CQUNqRDZDLEVBQXFCSCxFQUFhMUMsY0FBYyxrQ0FLaEQ4QyxFQUFldkMsU0FBU1AsY0FBYyxrQkFBa0IrQyxRQUN4REMsRUFBaUJ6QyxTQUFTUCxjQUFjLGdCQUU5QyxTQUFTaUQsRUFBZUMsR0FDdEIsTUFBTUMsRUFBY0wsRUFBYU0sV0FBVSxHQUFNcEQsY0FBYyxTQUN6RHFELEVBQVlGLEVBQVluRCxjQUFjLGdCQUN0Q3NELEVBQVlILEVBQVluRCxjQUFjLGdCQUN0Q3VELEVBQWNKLEVBQVluRCxjQUFjLG1CQUN4Q3dELEVBQWdCTCxFQUFZbkQsY0FBYyxxQkFzQmhELE9BcEJBdUQsRUFBWTNDLGlCQUFpQixTQUFTLEtBQ3BDMkMsRUFBWTlELFVBQVVnRSxPQUFPLHVCQUF1QixJQUd0REosRUFBVXpDLGlCQUFpQixTQUFTLEtBQ2xDOEMsRUFBVWhCLEdBQ1ZDLEVBQWtCekIsSUFBTWdDLEVBQUt6QixLQUM3QmtCLEVBQWtCZ0IsSUFBTVQsRUFBSzFCLEtBQzdCb0IsRUFBb0IxQyxZQUFjZ0QsRUFBSzFCLElBQUksSUFJN0NnQyxFQUFjNUMsaUJBQWlCLFNBQVMsS0FDdEN1QyxFQUFZeEQsUUFBUSxJQUd0QjBELEVBQVVuQyxJQUFNZ0MsRUFBS3pCLEtBQ3JCNEIsRUFBVU0sSUFBTVQsRUFBSzFCLEtBQ3JCOEIsRUFBVXBELFlBQWNnRCxFQUFLMUIsS0FFdEIyQixDQUNULENBMkJBLFNBQVNPLEVBQVVFLEdBQ2pCQSxFQUFNbkUsVUFBVUMsSUFBSSxnQkFHcEIsTUFBTW1FLEVBQTBCQyxJQUMxQkEsRUFBTUMsU0FBV0gsR0FDbkJJLEVBQVdKLEVBQ2IsRUFFRkEsRUFBTWhELGlCQUFpQixRQUFTaUQsR0FHaEMsTUFBTUksRUFBbUJDLElBQ1AsV0FBWkEsRUFBSUMsS0FDTkgsRUFBV0osRUFDYixFQUVGckQsU0FBU0ssaUJBQWlCLFVBQVdxRCxHQUdyQ0wsRUFBTVEsMEJBQTRCUCxFQUNsQ0QsRUFBTVMsaUJBQW1CSixDQUMzQixDQUVBLFNBQVNELEVBQVdKLEdBQ2xCQSxFQUFNbkUsVUFBVUUsT0FBTyxnQkFFdkJpRSxFQUFNVSxvQkFBb0IsUUFBU1YsRUFBTVEsMkJBQ3pDN0QsU0FBUytELG9CQUFvQixVQUFXVixFQUFNUyx5QkFFdkNULEVBQU1RLGlDQUNOUixFQUFNUyxnQkFDZixDQXpEQTlDLEVBQWFkLFNBQVM4RCxJQUNwQixNQUFNcEIsRUFBY0YsRUFBZXNCLEdBQ25DdkIsRUFBZXdCLFlBQVlyQixFQUFZLElBeUR6Q3ZCLEVBQVdoQixpQkFBaUIsU0FBUyxLRGxHUjZELElBQUM1RSxJQ21HWm9DLEVBQWlCLENBQUNGLEVBQW9CQyxHRGxHOUN2QixTQUFTdkIsSUFDakJpQixFQUFlTixFQUFRWCxHQUN2QkEsRUFBTXdGLE1BQVEsRUFBRSxJQ2lHaEJoQixFQUFVN0IsR0FDVkUsRUFBbUIyQyxNQUFRaEQsRUFBWXhCLFlBQ3ZDOEIsRUFBMEIwQyxNQUFRL0MsRUFBbUJ6QixXQUFXLElBR2xFaUMsRUFBY3ZCLGlCQUFpQixTQUFTLEtBQ3RDOEMsRUFBVXRCLEVBQWEsSUFHekJTLEVBQW1CakMsaUJBQWlCLFNBQVMsS0FDM0NvRCxFQUFXdEIsRUFBYSxJQUcxQlosRUFBdUJsQixpQkFBaUIsU0FBUyxLQUFRb0QsRUFBV25DLEVBQWlCLElBQ3JGUSxFQUFtQnpCLGlCQUFpQixTQUFTLEtBQVFvRCxFQUFXNUIsRUFBYSxJQUM3RUgsRUFBZ0JyQixpQkFBaUIsVUF2RWpDLFNBQStCc0QsR0FDN0JBLEVBQUlTLGlCQUNKakQsRUFBWXhCLFlBQWM2QixFQUFtQjJDLE1BQzdDL0MsRUFBbUJ6QixZQUFjOEIsRUFBMEIwQyxNQUMzRFYsRUFBV25DLEVBQ2IsSUFtRUFTLEVBQVkxQixpQkFBaUIsVUFqRTdCLFNBQTZCc0QsR0FDM0JBLEVBQUlTLGlCQUNKLE1BSU14QixFQUFjRixFQUpKLENBQ2R6QixLQUFNZ0IsRUFBb0JrQyxNQUMxQmpELEtBQU1jLEVBQWlCbUMsUUFHekIxQixFQUFlNEIsUUFBUXpCLEdBQ3ZCYixFQUFZdUMsUUFDWnZGLGNBQWNtRCxFQUFlbkUsR0FDN0IwRixFQUFXNUIsRUFDYixHQXVERixJQUVBaEMsRUFBaUI5QixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9zcG90cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X3Nwb3RzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3NlX3Byb2plY3Rfc3BvdHMvLi9zcmMvc2NyaXB0cy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovL3NlX3Byb2plY3Rfc3BvdHMvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuICBmb3JtU2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtXCIsXG4gIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIubW9kYWxfX3N1Ym1pdC1idG5cIixcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJtb2RhbF9fc3VibWl0LWJ0bl9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2lucHV0X3R5cGVfZXJyb3JcIixcbiAgZXJyb3JDbGFzczogXCJtb2RhbF9fZXJyb3JcIlxufVxuXG5jb25zdCBzZXRFdmVudExpc3RlbmVycyA9IChmb3JtRWwsIGNvbmZpZykgPT4ge1xuICAgY29uc3QgaW5wdXRMaXN0ID0gQXJyYXkuZnJvbShmb3JtRWwucXVlcnlTZWxlY3RvckFsbChzZXR0aW5ncy5pbnB1dFNlbGVjdG9yKSk7XG4gICBjb25zdCBidXR0b25FbCA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcbiAgIHRvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWwsIGNvbmZpZyk7XG5cbiAgIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGVja0lucHV0VmFsaWRpdHkoZm9ybUVsLCBpbnB1dEVsZW1lbnQpO1xuICAgICAgdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbCwgY29uZmlnKTtcbiAgICAgfSk7XG4gICB9KTtcbn07XG5cbmNvbnN0IGhhc0ludmFsaWRJbnB1dCA9IChpbnB1dExpc3QpID0+IHtcbiByZXR1cm4gaW5wdXRMaXN0LnNvbWUoKGlucHV0KSA9PiB7XG4gIHJldHVybiAhaW5wdXQudmFsaWRpdHkudmFsaWQ7XG4gfSk7XG59O1xuXG5jb25zdCB0b2dnbGVCdXR0b25TdGF0ZSA9IChpbnB1dExpc3QsIGJ1dHRvbkVsLCBjb25maWcpID0+IHtcbiBpZiAoaGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkpe1xuIGRpc2FibGVCdXR0b24oYnV0dG9uRWwsIGNvbmZpZyk7XG4gfSBlbHNlIHtcbiBlbmFibGVCdXR0b24oYnV0dG9uRWwsIGNvbmZpZyk7XG4gfVxufTtcblxuY29uc3QgZGlzYWJsZUJ1dHRvbiA9IChidXR0b25FbCwgc2V0dGluZ3MpID0+IHtcbiAgYnV0dG9uRWwuZGlzYWJsZWQgPSB0cnVlO1xuICBidXR0b25FbC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xufTtcblxuY29uc3QgZW5hYmxlQnV0dG9uID0gKGJ1dHRvbkVsLCBzZXR0aW5ncykgPT4ge1xuICBidXR0b25FbC5kaXNhYmxlZCA9IGZhbHNlO1xuICBidXR0b25FbC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0VmFsaWRhdGlvbiA9IChmb3JtRWwsIGlucHV0TGlzdCkgPT4ge1xuICBpbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBoaWRlSW5wdXRFcnJvcihmb3JtRWwsIGlucHV0KTtcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICB9KTtcbn07XG5cbmNvbnN0IGNoZWNrSW5wdXRWYWxpZGl0eSA9IChmb3JtRWwsIGlucHV0RWwpID0+IHtcbiAgaWYgKCFpbnB1dEVsLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgc2hvd0lucHV0RXJyb3IoZm9ybUVsLCBpbnB1dEVsLCBpbnB1dEVsLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlSW5wdXRFcnJvcihmb3JtRWwsIGlucHV0RWwpO1xuICB9XG4gIGNvbnNvbGUubG9nKGlucHV0RWwudmFsaWRpdHkpO1xufTtcblxuY29uc3Qgc2hvd0lucHV0RXJyb3IgPSAoZm9ybUVsLCBpbnB1dEVsLCBlcnJvck1zZykgPT4ge1xuICBjb25zdCBlcnJvck1zZ0VsID0gZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XG4gIGVycm9yTXNnRWwudGV4dENvbnRlbnQgPSBlcnJvck1zZztcbiAgaW5wdXRFbC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XG59O1xuXG5jb25zdCBoaWRlSW5wdXRFcnJvciA9IChmb3JtRWwsIGlucHV0RWwpID0+IHtcbiAgY29uc3QgZXJyb3JNc2dFbCA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xuICBlcnJvck1zZ0VsLnRleHRDb250ZW50ID0gXCJcIjtcbiAgaW5wdXRFbC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XG59O1xuXG5leHBvcnQgY29uc3QgZW5hYmxlVmFsaWRhdGlvbiA9IChjb25maWcpID0+IHtcbiAgIGNvbnN0IGZvcm1MaXN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy5mb3JtU2VsZWN0b3IpKTtcbiAgIGZvcm1MaXN0LmZvckVhY2goKGZvcm1FbCkgPT4ge1xuICAgIHNldEV2ZW50TGlzdGVuZXJzKGZvcm1FbCwgY29uZmlnKTtcbiAgIH0pO1xufTtcblxuZW5hYmxlVmFsaWRhdGlvbihzZXR0aW5ncyk7XG4iLCJpbXBvcnQge3NldHRpbmdzLCBlbmFibGVWYWxpZGF0aW9uLCByZXNldFZhbGlkYXRpb259IGZyb20gXCIuLi9zY3JpcHRzL3ZhbGlkYXRpb24uanNcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi9pbWFnZXMvbG9nby5zdmcnO1xuaW1wb3J0IGF2YXRhciBmcm9tICcuLi9pbWFnZXMvYXZhdGFyLmpwZyc7XG5pbXBvcnQgcGVuY2lsSWNvbiBmcm9tICcuLi9pbWFnZXMvcGVuY2lsaWNvbi5zdmcnO1xuaW1wb3J0IHBsdXNJY29uIGZyb20gJy4uL2ltYWdlcy9idXR0b24uc3ZnJztcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1sb2dvJykuc3JjID0gbG9nbztcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlLWF2YXRhcicpLnNyYyA9IGF2YXRhcjtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlLWVkaXQtaWNvbicpLnNyYyA9IHBlbmNpbEljb247XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZS1wb3N0LWljb24nKS5zcmMgPSBwbHVzSWNvbjtcblxuY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7IG5hbWU6IFwiVmFsIFRob3JlbnNcIiwgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL3Nwb3RzLzEtcGhvdG8tYnktbW9yaXR6LWZlbGRtYW5uLWZyb20tcGV4ZWxzLmpwZ1wiIH0sXG4gIHsgbmFtZTogXCJSZXN0YXVyYW50IHRlcnJhY2VcIiwgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL3Nwb3RzLzItcGhvdG8tYnktY2VpbGluZS1mcm9tLXBleGVscy5qcGdcIiB9LFxuICB7IG5hbWU6IFwiQW4gb3V0ZG9vciBjYWZlXCIsIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy8zLXBob3RvLWJ5LXR1YmFudXItZG9nYW4tZnJvbS1wZXhlbHMuanBnXCIgfSxcbiAgeyBuYW1lOiBcIkEgdmVyeSBsb25nIGJyaWRnZSwgb3ZlciB0aGUgZm9yZXN0IGFuZCB0aHJvdWdoIHRoZSB0cmVlc1wiLCBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvNC1waG90by1ieS1tYXVyaWNlLWxhc2NoZXQtZnJvbS1wZXhlbHMuanBnXCIgfSxcbiAgeyBuYW1lOiBcIlR1bm5lbCB3aXRoIG1vcm5pbmcgbGlnaHRcIiwgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL3Nwb3RzLzUtcGhvdG8tYnktdmFuLWFuaC1uZ3V5ZW4tZnJvbS1wZXhlbHMuanBnXCIgfSxcbiAgeyBuYW1lOiBcIk1vdW50YWluIGhvdXNlXCIsIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy82LXBob3RvLWJ5LW1vcml0ei1mZWxkbWFubi1mcm9tLXBleGVscy5qcGdcIiB9LFxuICB7IG5hbWU6IFwiR29sZGVuIEdhdGUgYnJpZGdlXCIsIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy83LXBob3RvLWJ5LWdyaWZmaW4td29vbGRyaWRnZS1mcm9tLXBleGVscy5qcGdcIiB9XG5dO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXG4gIC8vIEVkaXQgUHJvZmlsZSBNb2RhbFxuICBjb25zdCBwcm9maWxlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19uYW1lJyk7XG4gIGNvbnN0IHByb2ZpbGVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19kZXNjcmlwdGlvbicpO1xuICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2VkaXQtYnRuJyk7XG4gIGNvbnN0IGVkaXRQcm9maWxlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9maWxlJyk7XG4gIGNvbnN0IGVkaXRQcm9maWxlQ2xvc2VCdXR0b24gPSBlZGl0UHJvZmlsZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2ZpbGUtY2xvc2UtYnRuJyk7XG4gIGNvbnN0IGVkaXRNb2RhbE5hbWVJbnB1dCA9IGVkaXRQcm9maWxlTW9kYWwucXVlcnlTZWxlY3RvcignI3Byb2ZpbGUtbmFtZS1pbnB1dCcpO1xuICBjb25zdCBlZGl0TW9kYWxEZXNjcmlwdGlvbklucHV0ID0gZWRpdFByb2ZpbGVNb2RhbC5xdWVyeVNlbGVjdG9yKCcjcHJvZmlsZS1kZXNjcmlwdGlvbi1pbnB1dCcpO1xuICBjb25zdCBlZGl0UHJvZmlsZUZvcm0gPSBkb2N1bWVudC5mb3Jtc1sncHJvZmlsZS1mb3JtJ107XG5cbiAgLy8gTmV3IFBvc3QgTW9kYWxcbiAgY29uc3QgbmV3UG9zdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19wb3N0LWJ0bicpO1xuICBjb25zdCBuZXdQb3N0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWNhcmQtbW9kYWwnKTtcbiAgY29uc3QgbmV3UG9zdENsb3NlQnV0dG9uID0gbmV3UG9zdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNuZXctcG9zdC1jbG9zZS1idG4nKTtcbiAgY29uc3QgbmV3UG9zdEZvcm0gPSBkb2N1bWVudC5mb3Jtc1snbmV3LXBvc3QnXTtcbiAgY29uc3QgbmV3UG9zdExpbmtJbnB1dCA9IG5ld1Bvc3RNb2RhbC5xdWVyeVNlbGVjdG9yKCcjYWRkLWNhcmQtbGluay1pbnB1dCcpO1xuICBjb25zdCBuZXdQb3N0Q2FwdGlvbklucHV0ID0gbmV3UG9zdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNhZGQtY2FyZC1jYXB0aW9uLWlucHV0Jyk7XG4gIGNvbnN0IGNhcmRTdWJtaXRCdG4gPSBuZXdQb3N0TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fc3VibWl0LWJ0blwiKTtcblxuICAvLyBQcmV2aWV3IE1vZGFsXG4gIGNvbnN0IHByZXZpZXdNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2aWV3LW1vZGFsJyk7XG4gIGNvbnN0IHByZXZpZXdNb2RhbEltYWdlID0gcHJldmlld01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faW1hZ2UnKTtcbiAgY29uc3QgcHJldmlld01vZGFsQ2FwdGlvbiA9IHByZXZpZXdNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NhcHRpb24nKTtcbiAgY29uc3QgcHJldmlld0Nsb3NlQnV0dG9uID0gcHJldmlld01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2xvc2UtYnRuX3R5cGVfcHJldmlldycpO1xuXG5cblxuICAvLyBDYXJkc1xuICBjb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZC10ZW1wbGF0ZScpLmNvbnRlbnQ7XG4gIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzX19saXN0Jyk7XG5cbiAgZnVuY3Rpb24gZ2V0Q2FyZEVsZW1lbnQoZGF0YSkge1xuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKS5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpO1xuICAgIGNvbnN0IGNhcmRJbWFnZSA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pbWFnZScpO1xuICAgIGNvbnN0IGNhcmRUaXRsZSA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX190aXRsZScpO1xuICAgIGNvbnN0IGNhcmRMaWtlQnRuID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2xpa2UtYnRuJyk7XG4gICAgY29uc3QgY2FyZERlbGV0ZUJ0biA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19kZWxldGUtYnRuJyk7XG5cbiAgICBjYXJkTGlrZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNhcmRMaWtlQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWJ0bl9saWtlZFwiKTtcbiAgICB9KTtcblxuICAgIGNhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG9wZW5Nb2RhbChwcmV2aWV3TW9kYWwpO1xuICAgICAgcHJldmlld01vZGFsSW1hZ2Uuc3JjID0gZGF0YS5saW5rO1xuICAgICAgcHJldmlld01vZGFsSW1hZ2UuYWx0ID0gZGF0YS5uYW1lO1xuICAgICAgcHJldmlld01vZGFsQ2FwdGlvbi50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgICB9KTtcblxuXG4gICAgY2FyZERlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNhcmRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgY2FyZEltYWdlLnNyYyA9IGRhdGEubGluaztcbiAgICBjYXJkSW1hZ2UuYWx0ID0gZGF0YS5uYW1lO1xuICAgIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcblxuICAgIHJldHVybiBjYXJkRWxlbWVudDtcbiAgfVxuXG4gIGluaXRpYWxDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBnZXRDYXJkRWxlbWVudChjYXJkKTtcbiAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRWxlbWVudCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZU1vZGFsRm9ybVN1Ym1pdChldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBwcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IGVkaXRNb2RhbE5hbWVJbnB1dC52YWx1ZTtcbiAgICBwcm9maWxlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBlZGl0TW9kYWxEZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICAgIGNsb3NlTW9kYWwoZWRpdFByb2ZpbGVNb2RhbCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXdQb3N0U3VibWl0KGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5ld0NhcmQgPSB7XG4gICAgICBuYW1lOiBuZXdQb3N0Q2FwdGlvbklucHV0LnZhbHVlLFxuICAgICAgbGluazogbmV3UG9zdExpbmtJbnB1dC52YWx1ZVxuICAgIH07XG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBnZXRDYXJkRWxlbWVudChuZXdDYXJkKTtcbiAgICBjYXJkc0NvbnRhaW5lci5wcmVwZW5kKGNhcmRFbGVtZW50KTtcbiAgICBuZXdQb3N0Rm9ybS5yZXNldCgpO1xuICAgIGRpc2FibGVCdXR0b24oY2FyZFN1Ym1pdEJ0biwgc2V0dGluZ3MpO1xuICAgIGNsb3NlTW9kYWwobmV3UG9zdE1vZGFsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsX29wZW5lZCcpO1xuXG5cbiAgICBjb25zdCBjbG9zZU1vZGFsT3ZlcmxheUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbE92ZXJsYXlDbGljayk7XG5cblxuICAgIGNvbnN0IGNsb3NlTW9kYWxPbkVzYyA9IChldnQpID0+IHtcbiAgICAgIGlmIChldnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjbG9zZU1vZGFsT25Fc2MpO1xuXG4gICAgLy9BZGQgdGhlc2UgdG8gcmVtb3ZlIHRoZW0gbGF0ZXJcbiAgICBtb2RhbC5fY2xvc2VNb2RhbE9uQ2xpY2tPdXRzaWRlID0gY2xvc2VNb2RhbE92ZXJsYXlDbGljaztcbiAgICBtb2RhbC5fY2xvc2VNb2RhbE9uRXNjID0gY2xvc2VNb2RhbE9uRXNjO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsX29wZW5lZCcpO1xuXG4gICAgbW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb2RhbC5fY2xvc2VNb2RhbE9uQ2xpY2tPdXRzaWRlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbW9kYWwuX2Nsb3NlTW9kYWxPbkVzYyk7XG5cbiAgICBkZWxldGUgbW9kYWwuX2Nsb3NlTW9kYWxPbkNsaWNrT3V0c2lkZTtcbiAgICBkZWxldGUgbW9kYWwuX2Nsb3NlTW9kYWxPbkVzYztcbiAgfVxuXG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVzZXRWYWxpZGF0aW9uKGVkaXRQcm9maWxlRm9ybSwgW2VkaXRNb2RhbE5hbWVJbnB1dCwgZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dF0pO1xuICAgIG9wZW5Nb2RhbChlZGl0UHJvZmlsZU1vZGFsKTtcbiAgICBlZGl0TW9kYWxOYW1lSW5wdXQudmFsdWUgPSBwcm9maWxlTmFtZS50ZXh0Q29udGVudDtcbiAgICBlZGl0TW9kYWxEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gcHJvZmlsZURlc2NyaXB0aW9uLnRleHRDb250ZW50O1xuICB9KTtcblxuICBuZXdQb3N0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9wZW5Nb2RhbChuZXdQb3N0TW9kYWwpO1xuICB9KTtcblxuICBwcmV2aWV3Q2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xvc2VNb2RhbChwcmV2aWV3TW9kYWwpO1xuICB9KTtcblxuICBlZGl0UHJvZmlsZUNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBjbG9zZU1vZGFsKGVkaXRQcm9maWxlTW9kYWwpIH0pO1xuICBuZXdQb3N0Q2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGNsb3NlTW9kYWwobmV3UG9zdE1vZGFsKSB9KTtcbiAgZWRpdFByb2ZpbGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZU1vZGFsRm9ybVN1Ym1pdCk7XG4gIG5ld1Bvc3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZU5ld1Bvc3RTdWJtaXQpO1xufSlcblxuZW5hYmxlVmFsaWRhdGlvbihzZXR0aW5ncyk7Il0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJzZXR0aW5ncyIsImZvcm1TZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwidG9nZ2xlQnV0dG9uU3RhdGUiLCJpbnB1dExpc3QiLCJidXR0b25FbCIsImNvbmZpZyIsInNvbWUiLCJpbnB1dCIsInZhbGlkaXR5IiwidmFsaWQiLCJoYXNJbnZhbGlkSW5wdXQiLCJkaXNhYmxlQnV0dG9uIiwiZW5hYmxlQnV0dG9uIiwiZGlzYWJsZWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzaG93SW5wdXRFcnJvciIsImZvcm1FbCIsImlucHV0RWwiLCJlcnJvck1zZyIsInF1ZXJ5U2VsZWN0b3IiLCJpZCIsInRleHRDb250ZW50IiwiaGlkZUlucHV0RXJyb3IiLCJlbmFibGVWYWxpZGF0aW9uIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNldEV2ZW50TGlzdGVuZXJzIiwiaW5wdXRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrSW5wdXRWYWxpZGl0eSIsInZhbGlkYXRpb25NZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImdldEVsZW1lbnRCeUlkIiwic3JjIiwibG9nbyIsImF2YXRhciIsInBlbmNpbEljb24iLCJwbHVzSWNvbiIsImluaXRpYWxDYXJkcyIsIm5hbWUiLCJsaW5rIiwicHJvZmlsZU5hbWUiLCJwcm9maWxlRGVzY3JpcHRpb24iLCJlZGl0QnV0dG9uIiwiZWRpdFByb2ZpbGVNb2RhbCIsImVkaXRQcm9maWxlQ2xvc2VCdXR0b24iLCJlZGl0TW9kYWxOYW1lSW5wdXQiLCJlZGl0TW9kYWxEZXNjcmlwdGlvbklucHV0IiwiZWRpdFByb2ZpbGVGb3JtIiwiZm9ybXMiLCJuZXdQb3N0QnV0dG9uIiwibmV3UG9zdE1vZGFsIiwibmV3UG9zdENsb3NlQnV0dG9uIiwibmV3UG9zdEZvcm0iLCJuZXdQb3N0TGlua0lucHV0IiwibmV3UG9zdENhcHRpb25JbnB1dCIsImNhcmRTdWJtaXRCdG4iLCJwcmV2aWV3TW9kYWwiLCJwcmV2aWV3TW9kYWxJbWFnZSIsInByZXZpZXdNb2RhbENhcHRpb24iLCJwcmV2aWV3Q2xvc2VCdXR0b24iLCJjYXJkVGVtcGxhdGUiLCJjb250ZW50IiwiY2FyZHNDb250YWluZXIiLCJnZXRDYXJkRWxlbWVudCIsImRhdGEiLCJjYXJkRWxlbWVudCIsImNsb25lTm9kZSIsImNhcmRJbWFnZSIsImNhcmRUaXRsZSIsImNhcmRMaWtlQnRuIiwiY2FyZERlbGV0ZUJ0biIsInRvZ2dsZSIsIm9wZW5Nb2RhbCIsImFsdCIsIm1vZGFsIiwiY2xvc2VNb2RhbE92ZXJsYXlDbGljayIsImV2ZW50IiwidGFyZ2V0IiwiY2xvc2VNb2RhbCIsImNsb3NlTW9kYWxPbkVzYyIsImV2dCIsImtleSIsIl9jbG9zZU1vZGFsT25DbGlja091dHNpZGUiLCJfY2xvc2VNb2RhbE9uRXNjIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhcmQiLCJhcHBlbmRDaGlsZCIsInJlc2V0VmFsaWRhdGlvbiIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJwcmVwZW5kIiwicmVzZXQiXSwic291cmNlUm9vdCI6IiJ9