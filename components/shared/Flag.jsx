import ReactCountryFlag from "react-country-flag"

export default function Flag({title, country, size = 'w-12 h-12'}) {
    return(
        <ReactCountryFlag
            countryCode={country}
            svg
            cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
            className={`rounded-full ${size}`}
            cdnSuffix="svg"
            title={title}
        />
    )
}