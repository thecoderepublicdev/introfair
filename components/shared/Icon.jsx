import { 
    CalendarDaysIcon,
    CalendarIcon, 
    GlobeAmericasIcon, 
    MapPinIcon, 
    StarIcon 
} from '@heroicons/react/24/solid';

export default function Icon({
    name = 'star', 
    size = 24, 
    color = 'red'
}) {
    switch (name) {
        case 'calendar':
            return <CalendarIcon className={`text-${color} size-${size}`}/>
        case 'calendar-days':
            return <CalendarDaysIcon className={`text-${color} size-${size}`}/>
        case 'map-pin':
            return <MapPinIcon className={`text-${color} size-${size}`}/>
        case 'globe-americas':
            return <GlobeAmericasIcon className={`text-${color} size-${size}`}/>
        case 'globe-americas':
            return <GlobeAmericasIcon className={`text-${color} size-${size}`}/>
        default:
        case 'star':
            return <StarIcon className={`text-${color} size-${size}`}/>
    }
}