const initialState = {
    user:{

    },
    classes:[
        {"class_id":1,"class_name":"Pro Pilates","class_type":"Pilates","class_start":"2021-08-24 14-30-00","class_duration":"1 hour","class_intensity":"Profesional","class_description":"High-Intensity Pilates, for those who are expirienced. Get ready to feel the burn!!!","class_instructor":"Jack Black"},
          {
            className: "Yoga Class",
            classType: "Yoga",
            startTime: "4:30pm",
            duration: "40",
            intesity: "2",
            location: "San Diego, CA",
            maxClassSize: "15",
            class_id: "12",
          },
    ],
    isFetching: false,
    error:"",
}

// export const reducer = {state = initialState}