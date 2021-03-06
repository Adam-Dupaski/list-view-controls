import { SFC, createElement } from "react";
import * as classNames from "classnames";

interface PageNumberButtonProps {
    pageNumber: number;
    selectedPageNumber: number;
    onClickAction: (pageNumber: number) => void;
    key?: string | number;
}

export const PageNumberButton: SFC<PageNumberButtonProps> = (props: PageNumberButtonProps) => createElement("li", {
        className: classNames(
            props.selectedPageNumber === props.pageNumber ? "active" : "",
            props.pageNumber < 10 ? "single-digit" : ""
        ),
        onClick: () => props.onClickAction(props.pageNumber),
        key: props.key
    },
    props.pageNumber
);

PageNumberButton.displayName = "PageNumberButton";
