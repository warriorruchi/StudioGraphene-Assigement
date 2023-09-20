import {
    Card,
    CardBody,
    CardFooter,
    Button,
    Divider,
    Text,
    ButtonGroup,
    Stack,
    Heading,
    Image,

} from "@chakra-ui/react"
import './card.css'


function ProductCard({ image, title, price, category, description, id }) {

    return (
        <>
            <div className="product-card">
                <Card maxW='sm'>
                    <CardBody>
                        <div className="product-image-container">
                            <Image
                                src={image}
                                alt='Green double couch with wooden legs'
                                className="product-image"
                            />
                        </div>
                        <div className="product-details">
                            <Stack mt='6' spacing='3'>
                                <Heading className="product-title">{category}</Heading>

                                <Text className="product-title">
                                    {title}
                                </Text>
                                <Text className="product-description">
                                    {description}
                                </Text>
                                <Text
                                    className="product-price"
                                >
                                    {price}
                                </Text>
                            </Stack>
                        </div>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' className=".product-button-buy">
                                Buy now
                            </Button>
                            <Button variant='ghost' className="product-button-cart">
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

export default ProductCard;