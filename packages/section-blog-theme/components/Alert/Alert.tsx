export function Alert() {
    return (
        <div className="rounded-md bg-green-50 p-4">
            <p className="flex items-center text-sm font-medium text-green-600">
                <span className="pr-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="10" fill="currentColor"></circle>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1203 6.78954C14.3865 7.05581 14.3865 7.48751 14.1203 7.75378L9.12026 12.7538C8.85399 13.02 8.42229 13.02 8.15602 12.7538L5.88329 10.4811C5.61703 10.2148 5.61703 9.78308 5.88329 9.51682C6.14956 9.25055 6.58126 9.25055 6.84753 9.51682L8.63814 11.3074L13.156 6.78954C13.4223 6.52328 13.854 6.52328 14.1203 6.78954Z" fill="white"></path>
                    </svg>
                </span>
                The addition of your item was successful.
            </p>
        </div>
    )
}