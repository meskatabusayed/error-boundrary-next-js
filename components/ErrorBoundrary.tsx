"use client"
import { Component, ReactNode } from "react";

interface ErrorBoundraryProps{
    fallback : ReactNode;
    children : ReactNode;
}

interface ErrorBoundraryState{
    hasError : boolean;
}



class ErrorBoundrary extends Component<ErrorBoundraryProps , ErrorBoundraryState> {
    constructor(props : ErrorBoundraryProps){
        super(props);
        this.state = {
            hasError : false
        }
    }

    static getDerivedStateFromError(){
        return {hasError : true}
    }

    render(): ReactNode {
        if(this.state.hasError){
            return this.props.fallback
        }
        return this.props.children;
    }
}
export default ErrorBoundrary;