using AuthServer.DatabaseEntity;

internal class UserValidationRequestModel
{
    private readonly DigitalBooksContext context = new DigitalBooksContext();

    public string UserName { get; set; }
    public string Password { get; set; }

    public UserTable IsValidate(string username, string password)
    {
        UserTable usertable = null;
        if (context.UserTables == null)
        {
            return usertable;
        }
       
        usertable=(from x in context.UserTables where x.UserName==username && x.Password== AuthServer.EncryptDecrypt.EncodePasswordToBase64(password) select x).SingleOrDefault();
        return usertable;
    }
}
