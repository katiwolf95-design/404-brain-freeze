import heroIce from "../../assets/images/hero-ice-cream.png";

function HeroImage() {
    return (    
        <div>
            <img
            src={heroIce}
            alt="Ice Cream"
            className="w-auto max-h-133.75 object-contain"
            />
        </div>
    );
}
export default HeroImage;