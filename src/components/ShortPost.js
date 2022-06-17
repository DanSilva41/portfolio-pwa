import { ShortPostContainer } from "../styles/ShortPostContainer";

export const ShortPost = ({title, description}) => (
    <ShortPostContainer>
        <div>
            <h3>{title}</h3>
            <h4>{description}</h4>
        </div>
    </ShortPostContainer>
)