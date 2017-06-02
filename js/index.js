// setting the map start coordinates - Lat, Lng, zoom
var mymap = L.map('mapid', {
 center: [48.3794, 31.1656],
  zoom: 6,
  minZoom: 3,
  maxZoom: 20
});

// OpenStreetMap tile layer url //'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
///http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png
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

//Styles of markers
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
  if (feature.properties && feature.properties.city) {
        layer.bindTooltip(feature.properties.city,
                          {className: 'customTooltip',
          permanent: true,
                           direction: 'bottom',
                           opacity: 0.68                   
                          }
                         
                         );
    }
}

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
			"name": "Ліза Александрович, Меланія-Марія Подоляк, Катерина Маруняк, Каріна Степанчикова",
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
		"name": "Вікторія Димарчук, Ярослава Савош",
		"city": "Луцьк",
		"show_on_map": true
	},
	"geometry": {
		"type": "Point",
		"coordinates": [25.325383, 50.747233]
	}

}, {
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

}];

var layerOfStudents2014 = [{
		"type": "Feature",
		"properties": {
			"name": "Ганна Цупко, Анна Стукало",
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
			"name": "Вероніка Тихонова",
			"city": "Керч",
			"show_on_map": true
		},
		"geometry": {
			"type": "Point",
			"coordinates": [36.468293, 45.357314]
		}
	}, {
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
			"name": "Олександра Давиденко, Богдана Потішка, Соломія Савка, Олег Твердь",
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
			"name": "Наталія Ревко, Веніамін Умнов",
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
			"name": "Вікторія Гайбонюк, Анастасія Онопрійчук, Юрій Кульчинський",
			"city": "Рівне",
			"show_on_map": true
		},
		"geometry": {
			"type": "Point",
			"coordinates": [26.251617, 50.619900]
		}
	}, {
		"type": "Feature",
		"properties": {
			"name": "Галина Герасим, Надія Михалевич, Мар’яна Мазурак",
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
	}
];

var khutorivka =  [{
	"type": "Feature",
	"properties": {
		"name": "Магістерська програма з медіакомунікацій",
		"city": "Хуторівка, 35а",
		"show_on_map": true
	},
	"geometry": {
		"type": "Point",
		"coordinates": [24.037251, 49.801154]
	}
}
  ];

var geojsonMarkerOptions = {
//    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var khutorivkaLocation = L.geoJSON(khutorivka, {
    onEachFeature: onEachFeature,
}).addTo(mymap);

var students2016Map = L.geoJSON(layerOfStudents2016, {
    style: customStyle,
    onEachFeature: onEachFeature,
   pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(mymap);

var students2015Map = L.geoJSON(layerOfStudents2015, {
    style: customStyle,
    onEachFeature: onEachFeature,
   pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(mymap);

var students2014Map = L.geoJSON(layerOfStudents2014, {
    style: customStyle,
    onEachFeature: onEachFeature,
   pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(mymap);

var students2013Map = L.geoJSON(layerOfStudents2013, {
    style: customStyle,
    onEachFeature: onEachFeature,
   pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(mymap);

//Implementing layer control
var Students2016 = L.tileLayer(students2016Map),
 Students2015 = L.tileLayer(students2015Map),
    Students2014 = L.tileLayer(students2014Map),
    Students2013 = L.tileLayer(students2013Map);
    
//Object to contain the base map layers
var baseMaps = {
    "Набір 2016": students2016Map,
    "Набір 2015": students2015Map,
   "Набір 2014": students2014Map,
  "Набір 2013": students2013Map
};
var allStudents = L.layerGroup([students2016Map, students2015Map, students2014Map, students2013Map]);
//TODO - fix overlay
var overlayMaps = {
    "Усі студенти": allStudents
};

L.control.layers(baseMaps, null).addTo(mymap);
