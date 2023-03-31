import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogCloseButton,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Box,
	Button,
	Flex,
	useDisclosure,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'

type RemoveConfirmModal = {
	previewText?: string
	onDelete?: () => void
	onCancel?: () => void
	children: React.ReactNode
}

export const DialogDeleteConfirm = ({
	previewText,
	onDelete,
	children,
}: RemoveConfirmModal) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [isLoading, setIsLoading] = useState(false)
	const cancelRef = useRef(null)

	const handleConfirm = async () => {
		setIsLoading(true)
		try {
			await onDelete?.()
		} catch {
			onClose()
			setIsLoading(false)
			return
		}
		onClose()
		setIsLoading(false)
	}

	return (
		<>
			<Box onClick={onOpen}>{children}</Box>
			<AlertDialog
				leastDestructiveRef={cancelRef}
				onClose={onClose}
				isOpen={isOpen}
			>
				<AlertDialogOverlay />

				<AlertDialogContent>
					<AlertDialogHeader>Delete Confirmation</AlertDialogHeader>
					<AlertDialogCloseButton />
					<AlertDialogBody>
						Are you sure you want to delete
						{previewText ? <>{previewText}</> : ''}? This action is irreversible
					</AlertDialogBody>
					<AlertDialogFooter>
						<Flex gap={2}>
							<Button ref={cancelRef} onClick={onClose}>
								Cancel
							</Button>
							<Button
								isLoading={isLoading}
								bg="red.600"
								onClick={handleConfirm}
							>
								Delete
							</Button>
						</Flex>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	)
}
