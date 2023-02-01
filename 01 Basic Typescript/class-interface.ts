
interface IUserFormattor{
    formatUser: () => string;
}
class InUser implements IUserFormattor{
    constructor(fullName: string, age: number) { }

    formatUser = () => {
        return `Show my $this{}`
    }
}