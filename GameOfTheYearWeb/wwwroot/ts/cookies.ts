class Cookies {
    public static SetCookie(name: string, val): void {
        const date = new Date();
        const value = val;

        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

        document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
    }

    public static GetCookie(name: string): string | null {
        var nameEQ = name + "=";

        var ca = document.cookie.split(';');

        for (var i = 0; i < ca.length; i++) {

            var c = ca[i];

            while (c.charAt(0) == ' ') c = c.substring(1, c.length);

            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }

        return null;
    }
}