// setting the initial map coordinates - Lat, Lng, zoom
var mymap = L.map('mapid', {
    center: [48.3794, 31.1656],
    zoom: 6,
    minZoom: 3,
    maxZoom: 20
});

// OpenStreetMap tile layer url goes here
var mapStyle = L.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
    attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a> Contributors & <a href="http://stamen.com">Stamen Design</a>.',
    maxZoom: 20,
    minZoom: 3,
}).addTo(mymap);

//Adding city labels
mymap.createPane('labels');
var positronLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    pane: 'labels'
}).addTo(mymap);

//Styles of geomarkers
var customStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.5
};

// To attach popup content to each geomarker
function onEachFeature(feature, layer) {
    // does this feature have a property named name?
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
    }

    // To attach city name tooltip to each geomarker
    if (feature.properties && feature.properties.city) {
        layer.bindTooltip(feature.properties.city, {
            className: 'customTooltip',
            permanent: true,
            direction: 'bottom',
        });
    }   
    //TODO: To add polylines to the marker
//    if (feature.properties && feature.properties.previous_uni && feature.geometry && feature.geometry.coordinates) {
//     layer.bindPolyline(feature.geometry.coordinates, feature.properties.previous_uni) 
//    }
}
//TODO - move data to external geojson
var layerOfStudents2016 = [{
        "type": "Feature",
        "properties": {
            "name": "Валерія Аркашова",
            "city": "Мирноград",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [37.270004, 48.296212]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Микита Богданов",
            "city": "Запоріжжя",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [35.139567, 47.838800]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Марія Клокова",
            "city": "Марганець",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [34.610520, 47.648924]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Аліна Журбенко",
            "city": "Нижня Сироватка",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [34.837894, 50.784462]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Анастасія Івашина",
            "city": "Богданівка",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [36.046944, 47.105833]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Ревіде Зіятдінова",
            "city": "Старий Крим",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [35.086372, 45.027423]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Ліза Александрович",
            "city": "Львів",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Меланія-Марія Подоляк",
            "city": "Львів",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Катерина Маруняк",
            "city": "Львів",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Каріна Степанчикова",
            "city": "Львів",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Анна Дорожко",
            "city": "Полтава",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [34.551417, 49.588267]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Ілля Ігнатов",
            "city": "Гливаха",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.289281, 50.262316]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Єлизавета Панченко",
            "city": "Світловодськ",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [33.228469, 49.049684]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Кристина Поворозник",
            "city": "Київ",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.523400, 50.450100]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Тетяна Семейко",
            "city": "Миколаїв",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [31.994583, 46.975033]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Марія Сенишин",
            "city": "Стрий",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [23.843134, 49.265608]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Олександр Тирон",
            "city": "Одеса",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.723310, 46.482526]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Катерина Фірсова",
            "city": "Донецьк",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [37.802850, 48.015883]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Ольга Ліхобабіна",
            "city": "Луганськ",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [39.307815, 48.574041]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Анатолій Шульгат",
            "city": "Павлоград",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [35.903257, 48.529448]
        }

    }
];

var layerOfStudents2015 = [{
        "type": "Feature",
        "properties": {
            "name": "Анна Яценко",
            "city": "Ічня",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [32.397489, 50.857956]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Олена Бондар",
            "city": "Оржів",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [26.116395, 50.742978]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Маріанна Ластовецька",
            "city": "Львів",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Назарій Мочула",
            "city": "Тернопіль",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [25.594767, 49.553517]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Ніярє Шевкієва",
            "city": "Крим",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [34.499727, 45.345303]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Дмитро Василюк",
            "city": "Яворів",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [23.388522, 49.938089]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Валентина Семеніхіна",
            "city": "Одеса",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.723310, 46.482526]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Вікторія Димарчук",
            "city": "Луцьк",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [25.325383, 50.747233]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Ярослава Савош",
            "city": "Луцьк",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [25.325383, 50.747233]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Анна Малахова",
            "city": "Мукачево",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [22.711711, 48.449306]
        }

    }, {
        "type": "Feature",
        "properties": {
            "name": "Владислав Рудий",
            "city": "Олександрія",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [33.096788, 48.663270]
        }

    }, {
        "type": "Feature",
        "properties": {
            "name": "Ярослава Григорчук",
            "city": "Долинська",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [32.765868, 48.113256]
        }

    }, {
        "type": "Feature",
        "properties": {
            "name": "Анастасія Мальцева",
            "city": "Кривий Ріг",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [33.391783, 47.910483]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Роман Скрипник",
            "city": "Дніпро",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [35.046183, 48.464717]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Олександра Сіммуль",
            "city": "Івано-Франківськ",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.711117, 48.922633]
        }

    }
];

var layerOfStudents2014 = [{
        "type": "Feature",
        "properties": {
            "name": "Ганна Цупко",
            "city": "Запоріжжя",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [35.139567, 47.838800]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Анна Стукало",
            "city": "Запоріжжя",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [35.139567, 47.838800]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Вероніка Тихонова",
            "city": "Керч",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [36.468293, 45.357314]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Аліна Смутко",
            "city": "Полтава",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [34.551417, 49.588267]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Олександра Давиденко",
            "city": "Львів",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Богдана Потішка",
            "city": "Львів",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Соломія Савка",
            "city": "Львів",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Олег Твердь",
            "city": "Львів",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Анна Романдаш",
            "city": "Новий Розділ",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.129058, 49.474504]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Євгенія Резниченко",
            "city": "Донецьк",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [37.802850, 48.015883]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Наталія Патрікєєва",
            "city": "Христинівка",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [29.973895, 48.811721]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Ірина Мацькова",
            "city": "Летичів",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [27.624225, 49.385028]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Данило Кушпета",
            "city": "Млинів",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [25.611077, 50.507764]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Єлизавета Кузнєцова",
            "city": "Рівне",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [26.251617, 50.619900]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Руслан Герасименко",
            "city": "Мелітополь",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [35.358700, 46.855022]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Оксана Ажнюк",
            "city": "Стрий",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [23.843134, 49.265608]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Наталія Ревко",
            "city": "Одеса",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.723310, 46.482526]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Христина Малиш",
            "city": "Львів",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Веніамін Умнов",
            "city": "Одеса",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.723310, 46.482526]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Марія Пасельська",
            "city": "Новий Уренгой",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [76.656352, 66.095686]
        }
    }
];

var layerOfStudents2013 = [{
        "type": "Feature",
        "properties": {
            "name": "Вікторія Гайбонюк",
            "city": "Рівне",
            "show_on_map": true,
            "previous_uni": [35.139567, 47.838800]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [26.251617, 50.619900]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Анастасія Онопрійчук",
            "city": "Рівне",
            "show_on_map": true,
            "previous_uni": [35.139567, 47.838800]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [26.251617, 50.619900]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Карина Лазарук",
            "city": "Київ",
            "show_on_map": true,
            "previous_uni": [50.450100, 30.523400]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [26.251617, 50.619900]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Юрій Кульчинський",
            "city": "Рівне",
            "show_on_map": true,
            "previous_uni": [35.139567, 47.838800]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [26.251617, 50.619900]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Галина Герасим",
            "city": "Львів",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }
    },

    {
        "type": "Feature",
        "properties": {
            "name": "Надія Михалевич",
            "city": "Львів",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Мар’яна Мазурак",
            "city": "Львів",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Яна Машкова",
            "city": "Корсунь-Шевченківський",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [31.261853, 49.426112]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Олеся Малюванчук",
            "city": "Івано-Франківськ",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.711117, 48.922633]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Софія Кочмар",
            "city": "Бузьк",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.609461, 49.969359]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Вікторія Ільченко",
            "city": "Випасне",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.266619, 46.196812]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Ігор Фещенко",
            "city": "Сміла",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [31.852233, 49.227717]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Марта Дацюк",
            "city": "Сокаль",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.280156, 50.486354]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Богдана Рущак",
            "city": "Буштино",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [23.482774, 48.049668]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Анна Казак",
            "city": "Запоріжжя",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [35.139567, 47.838800]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Джессіка Пачеко-Семенюк",
            "city": "Savannah",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [32.110746, -81.191454]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Каріна Фурса",
            "city": "Богданівка",
            "show_on_map": true,
            "previous_uni": [35.139567, 47.838800]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [36.046944, 47.105833]
        }
    }
];
var univercities = [{
        "type": "Feature",
        "properties": {
            "name": "Магістерська програма з медіакомунікацій УКУ",
            "city": "Хуторівка, 35а",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.037251, 49.801154]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Запорізький національний університет",
            "city": "Запоріжжя",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [35.139567, 47.838800]
        }
    }
];
//Geomarker styles
var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

//Creating cluster layers for each students' year. TODO: deal with this redundant piece of code
var univercitiesMap = new L.markerClusterGroup({
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true
});

var students2016Map = new L.markerClusterGroup({
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true
});
var students2015Map = new L.markerClusterGroup({
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true
});
var students2014Map = new L.markerClusterGroup({
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true
});
var students2013Map = new L.markerClusterGroup({
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true
});
//Layer to show all the students
var allStudents = new L.markerClusterGroup({
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true
});

var univercityLocation = L.geoJSON(univercities, {
    onEachFeature: onEachFeature,
}).addTo(univercitiesMap);

L.geoJSON(layerOfStudents2016, {
    style: customStyle,
    onEachFeature: onEachFeature,
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(students2016Map).addTo(allStudents);

L.geoJSON(layerOfStudents2015, {
    style: customStyle,
    onEachFeature: onEachFeature,
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(students2015Map).addTo(allStudents);

L.geoJSON(layerOfStudents2014, {
    style: customStyle,
    onEachFeature: onEachFeature,
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(students2014Map).addTo(allStudents);

L.geoJSON(layerOfStudents2013, {
    style: customStyle,
    onEachFeature: onEachFeature,
//    getStudentPolylines: function(feature, studentPolylines) {
//        return L.Polyline(studentPolylines, polylineStyle);
//    },
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(students2013Map).addTo(allStudents);

//Implementing layer control
var baseMaps = {
    "Набір 2016": students2016Map,
    "Набір 2015": students2015Map,
    "Набір 2014": students2014Map,
    "Набір 2013": students2013Map,
    //TODO: add showing all the students functionality
    "Усі студенти": allStudents
};
//TODO - fix overlay
var overlayMaps = {
    "Навчальні заклади": univercitiesMap
};
//Change this to enable or disable the overlay/base layer group 
L.control.layers(baseMaps, overlayMaps).addTo(mymap);
//allStudents.addTo(mymap);
mymap.clearLayers();

//To minimize project info on click. TODO add event on the map click
function minimizeInfo(elem) {
    var getInfo = document.getElementsByClassName('box-dynamic')
    for (var i = 0; i < getInfo.length; i++) {
        getInfo[i].classList.remove('minimize')
    }
    elem.classList.add('minimize');
}

// polylineStyle.appendTooltip(polylineDistance) ---TODO
//var polylineDistance;

// TODO Adding polylines to map
// To add polyline to each geomarker 
function bindPolyline(hometown, prev_uni) {
this.hometown = hometown;
this.prev_uni = prev_uni;
const khutorivka = new L.LatLng(49.801154, 24.037251);  
var polylinePoints = [hometown, prev_uni, khutorivka];
  var polylineStyle = {
    color: 'blue',
    weight: 6,
    opacity: 0.8
};
var polyline = new L.Polyline(polylinePoints, polylineStyle)
.addTo(mymap);
  };

//ADD THIS WHEN THE FUNCTION WILL WORK
//mymap.fitBounds(polyline.getBounds());
