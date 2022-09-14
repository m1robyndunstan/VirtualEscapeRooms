export class PhoneContact {
    public called: boolean;

    constructor(
        public name: string,
        public number: string,
        public icon: string,
        public flavorText: string
    ) {
        this.called = false;
    }

    getIconClasses = () => {
        return "fa-solid " + (this.called ? this.icon : "fa-phone");
    }
}
