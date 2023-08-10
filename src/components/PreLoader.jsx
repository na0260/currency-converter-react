const PreLoader = () => {
    return (
        <div>
            <div className="md:container mx-auto md:py-96 py-72">
                <div className="grid grid-cols-1 md:pt-10">
                    <div className="flex justify-center">
                        <span className="loading loading-bars loading-lg"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreLoader;