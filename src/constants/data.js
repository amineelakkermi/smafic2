export const navItems = [
    {
        title:'Home',
        url:'/',
        cName:'nav-links',
    },
    {
        title:'About',
        url:'/about',
        cName:'nav-links',
    },
    {
        title:'Services',
        url:'/services',
        cName:'nav-links',
    },
    {
        title:'Contact',
        url:'/contact',
        cName:'nav-links',
    },
    
]


import { doors, furniture, img62, lighting } from "../assets"

export const servicesData = [
    {
        titleAr: 'قص و تشريح ألواح الصاج',
        titleEn: 'Cutting and Slicing iron sheets',
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-scissors text-blue" viewBox="0 0 16 16"><path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/></svg>`,
        id: '1',
    },
    {
        titleAr: 'الطعج و الثني لألواح الصاج',
        titleEn: 'Indenting and bending of sheet metal',
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-hammer text-blue" viewBox="0 0 16 16"><path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334"/></svg>`,
        id: '2',
    },
    {
        titleAr: 'الصيانة و اللحام',
        titleEn: 'Maintenance and welding',
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-tools text-blue" viewBox="0 0 16 16"><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/></svg>`,
        id: '3',
    },
    {
        titleAr: 'التشكيل و القص باليزر',
        titleEn: 'Laser forming and cutting',
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-laser text-blue" viewBox="0 0 16 16"><path d="M1.5 1a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13zm1 2a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zM5 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 5 5.5zm2 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H7zM4.5 9a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6A.5.5 0 0 1 4.5 9zm2 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H6.5zM3 12.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm1.5 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/></svg>`,
    
        id: '4',
    },
    {
        titleAr: 'لف التوانك و الخزانات و الصاج',
        titleEn: 'Winding tanks and saj',
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-box-seam text-blue" viewBox="0 0 16 16"><path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/></svg>`,
        id: '5',
    },
    {
        titleAr: 'الدهان الحراري',
        titleEn: 'Thermal Coating',
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-paint-bucket text-blue" viewBox="0 0 16 16"><path d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a3 3 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1 1 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4 4 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067S8.857 3.052 8.23 2.704c-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.3 3.3 0 0 1-.131-.673q.137.09.337.274m.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088q.081.181.183.365c.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626q.183.103.365.183l-4.861 4.862-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46s-1.168-1.32-1.46-1.846c-.147-.265-.225-.47-.251-.607l-.01-.068zm2.87-1.935a2.4 2.4 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.5 3.5 0 0 0-1.066.091 11 11 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z"/></svg>`,
        id: '6',
        
      
    },
  
 
]

export const productsData = [
    {
        titleAr: 'منتجات الديكورات المعدنية',
        titleEn: 'Meta Decoration Products',
        img: lighting,
        id: '1',
    },
    {
        titleAr: 'الأبواب و الشبابيك و الدرابزين مع ملحقاتها',
        titleEn: 'Doors, windows and handrails with accessories',
        img: doors,
        id: '2',

    },
    {
        titleAr: 'منتجات الأثاث المعدني',
        titleEn: 'Metal Furniture Products',
        img: furniture,
        id: '3',
    },
    {
        titleAr: 'منتجات الإنارة المعدنية',
        titleEn: 'Decorative lighiting products',  
        img: doors,
        id: '4',
    },
    {
        titleAr: 'الواجهات المعدنية و الأسوار',
        titleEn: 'Metal facades and fences',
        img: lighting,
        id: '5',
    },
   
 
]



export const feedBack = [
    {
      img: img62,
      name: "E.Amine",
      status: "Developer",
      text: "I was impressed by the variety of styles available.",
    },
    {
      img: img62,
      name: "E.Ahmed",
      status: "Developer",
      text: "I was impressed by the variety of styles available.",
    },
]  