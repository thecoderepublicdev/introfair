import Icon from "./Icon";
import Subtitle from "./Subtitle";
import Title from "./Title";

export default function IconBox({
    icon = 'star',
    title = 'Title',
    subtitle = false
}) {
    return(
        <div className="flex items-center content-center gap-2">
            <div className="rounded-lg w-[80px] h-[80px] bg-brand-primary-500 grid place-content-center place-items-center">
                <Icon name={icon} size={36} color="white"/>  
            </div>

            <div className="grid gap-0">
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
                <Title level="h2" size="3xl">{title}</Title>
            </div>
        </div>
    )
}