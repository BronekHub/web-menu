export class FilterModel {
    constructor(
        public code: string,
        public name: string,
        public isSelected: boolean = false
    ) {}
}