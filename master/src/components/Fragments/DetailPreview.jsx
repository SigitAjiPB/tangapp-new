const DetailPreview = () => {
    return (
        <div className="flow-root justify-center px-6 py-6 sm:px-12 lg:col-span-4 lg:px-8 lg:py-6 xl:col-span-6 border divide-y-2">
        <h1 className="text-2xl m-6">Detail Preview</h1>
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Name Event</dt>
                <dd className="text-gray-700 sm:col-span-2">Muncak</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Orgenizer</dt>
                <dd className="text-gray-700 sm:col-span-2">Mr. Tuktuk</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Date</dt>
                <dd className="text-gray-700 sm:col-span-2">09-08-2024</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Cost</dt>
                <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Bio</dt>
                <dd className="text-gray-700 sm:col-span-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
                    doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
                    aspernatur neque molestiae labore aliquam soluta architecto?
                </dd>
            </div>
        </dl>
    </div>
    )
}

export default DetailPreview